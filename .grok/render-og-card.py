#!/usr/bin/env python3
"""Institutional 1200x630 share card for CyberPro Global Foundation.

Typography-led. Simplified geometric seal only: navy laurel, crimson
shield, book, and tower. No gradients, no invented statistics.
"""
import math
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY = (20, 41, 74)        # #14294A
CRIMSON = (165, 31, 43)    # #A51F2B
WHITE = (255, 255, 255)    # #FFFFFF
OFF = (245, 246, 248)      # #F5F6F8
CHAR = (37, 42, 50)        # #252A32

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SERIF_REG = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

PANEL = 430


def mix(a, b, t):
    return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))


def heater_shield(cx, top, w, h, steps=20):
    shoulder = top + h * 0.56
    tip = top + h
    pts = [(cx - w / 2, top), (cx + w / 2, top), (cx + w / 2, shoulder)]
    for i in range(1, steps + 1):
        ang = (i / steps) * math.pi / 2
        x = cx + (w / 2) * math.cos(ang)
        y = shoulder + (tip - shoulder) * math.sin(ang)
        pts.append((x, y))
    for i in range(1, steps + 1):
        ang = (i / steps) * math.pi / 2
        x = cx - (w / 2) * math.sin(ang)
        y = tip - (tip - shoulder) * (1 - math.cos(ang))
        pts.append((x, y))
    return pts


def leaf_sprite(length, width, fill):
    """Pointed laurel leaf, stem at the left, tip at the right."""
    img = Image.new("RGBA", (length + 4, width + 4), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    cy = (width + 4) / 2
    pts = []
    steps = 22
    for i in range(steps + 1):
        t = i / steps
        x = 2 + t * length
        bulge = math.sin(t * math.pi) ** 0.72
        pts.append((x, cy - (width / 2) * bulge))
    for i in range(steps, -1, -1):
        t = i / steps
        x = 2 + t * length
        bulge = math.sin(t * math.pi) ** 0.72
        pts.append((x, cy + (width / 2) * bulge))
    dr.polygon(pts, fill=fill + (255,))
    rib = mix(fill, OFF, 0.55)
    dr.line([(5, cy), (length - 1, cy)], fill=rib + (255,), width=1)
    return img


def paste_center(base, sprite, cx, cy):
    base.alpha_composite(
        sprite, (int(round(cx - sprite.width / 2)), int(round(cy - sprite.height / 2)))
    )


def draw_seal(base, cx, cy):
    """Navy laurel around an off-white medallion, crimson shield, book, tower."""
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    disk_r = 146
    d.ellipse(
        [cx - disk_r, cy - disk_r, cx + disk_r, cy + disk_r],
        fill=OFF + (255,),
    )
    # Crimson rim, then a navy hairline so the medallion is a seal, not a sticker.
    d.ellipse(
        [cx - disk_r, cy - disk_r, cx + disk_r, cy + disk_r],
        outline=CRIMSON + (255,),
        width=8,
    )
    inner = disk_r - 14
    d.ellipse(
        [cx - inner, cy - inner, cx + inner, cy + inner],
        outline=NAVY + (255,),
        width=2,
    )

    # Stems first, then leaves, so the wreath reads as two branches.
    stem_r = 96

    def arc_line(a0, a1, radius, width=3):
        pts = []
        steps = 36
        for i in range(steps + 1):
            deg = a0 + (a1 - a0) * i / steps
            rad = math.radians(deg)
            pts.append((cx + math.cos(rad) * radius, cy + math.sin(rad) * radius))
        d.line(pts, fill=NAVY + (255,), width=width)

    arc_line(124, 236, stem_r, 3)
    arc_line(-56, 56, stem_r, 3)

    leaf = leaf_sprite(36, 16, NAVY)
    leaf_r = 100

    def arc(start_deg, end_deg, count):
        for i in range(count):
            t = i / (count - 1)
            deg = start_deg + (end_deg - start_deg) * t
            rad = math.radians(deg)
            lx = cx + math.cos(rad) * leaf_r
            ly = cy + math.sin(rad) * leaf_r
            rot = leaf.rotate(-deg, expand=True, resample=Image.BICUBIC)
            paste_center(overlay, rot, lx, ly)

    # Open at the top. Math angles: 0 east, 90 south, 180 west.
    arc(128, 232, 7)
    arc(-52, 52, 7)

    # Shield
    sw, sh = 100, 124
    stop = cy - 56
    shield = heater_shield(cx, stop, sw, sh)
    d.polygon(shield, fill=CRIMSON + (255,))

    # Tower — crenellated block in off-white.
    tw, th = 36, 32
    ttop = stop + 24
    left = cx - tw / 2
    merlon_w, merlon_h, gap = 8, 8, 3
    merlons = 3
    span = merlons * merlon_w + (merlons - 1) * gap
    mx0 = cx - span / 2
    for i in range(merlons):
        x = mx0 + i * (merlon_w + gap)
        d.rectangle([x, ttop - merlon_h, x + merlon_w, ttop + 1], fill=OFF + (255,))
    d.rectangle([left, ttop, left + tw, ttop + th], fill=OFF + (255,))
    ww, wh = 10, 14
    d.rectangle(
        [cx - ww / 2, ttop + th - wh, cx + ww / 2, ttop + th],
        fill=CRIMSON + (255,),
    )

    # Open book beneath the tower, pages lifting toward the center crease.
    bw, bh = 56, 16
    btop = ttop + th + 8
    gap = 3
    d.polygon(
        [
            (cx - bw / 2, btop + 4),
            (cx - gap / 2, btop),
            (cx - gap / 2, btop + bh - 2),
            (cx - bw / 2 + 1, btop + bh),
        ],
        fill=OFF + (255,),
    )
    d.polygon(
        [
            (cx + gap / 2, btop),
            (cx + bw / 2, btop + 4),
            (cx + bw / 2 - 1, btop + bh),
            (cx + gap / 2, btop + bh - 2),
        ],
        fill=OFF + (255,),
    )

    base.alpha_composite(overlay)


def tracked_text(draw, xy, text, font, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x


def tracked_width(draw, text, font, tracking):
    if not text:
        return 0
    return sum(draw.textlength(ch, font=font) + tracking for ch in text) - tracking


def main():
    im = Image.new("RGBA", (W, H), OFF + (255,))
    d = ImageDraw.Draw(im)

    # Navy panel — flat field, not a gradient.
    d.rectangle([0, 0, PANEL, H], fill=NAVY + (255,))
    # Crimson rule at the seam.
    d.rectangle([PANEL, 0, PANEL + 8, H], fill=CRIMSON + (255,))

    # Stationery bars: navy top and bottom on the light field only,
    # so the panel stays one calm mass.
    d.rectangle([PANEL + 8, 0, W, 10], fill=NAVY + (255,))
    d.rectangle([PANEL + 8, H - 10, W, H], fill=NAVY + (255,))

    seal_cx = PANEL / 2
    seal_cy = H / 2 + 4
    draw_seal(im, seal_cx, seal_cy)

    # Text column.
    text_left = PANEL + 8 + 64
    text_right = W - 72
    col_w = text_right - text_left

    title_font = ImageFont.truetype(SERIF, 64)
    title_lines = ["CyberPro Global", "Foundation"]
    sub_font = ImageFont.truetype(SANS, 26)
    subtitle = "Digital inclusion and safer participation"

    # Measure block.
    line_gap = 6
    title_heights = []
    title_widths = []
    for line in title_lines:
        bbox = d.textbbox((0, 0), line, font=title_font)
        title_widths.append(bbox[2] - bbox[0])
        title_heights.append(bbox[3] - bbox[1])
    sub_bbox = d.textbbox((0, 0), subtitle, font=sub_font)
    sub_w = sub_bbox[2] - sub_bbox[0]
    sub_h = sub_bbox[3] - sub_bbox[1]

    rule_w = 84
    rule_h = 3
    gap_after_title = 26
    gap_after_rule = 22

    block_h = (
        sum(title_heights)
        + line_gap * (len(title_lines) - 1)
        + gap_after_title
        + rule_h
        + gap_after_rule
        + sub_h
    )
    # Optical center, slightly above geometric middle.
    y = (H - block_h) / 2 - 6

    draw = ImageDraw.Draw(im)
    for i, line in enumerate(title_lines):
        draw.text((text_left, y - 8), line, font=title_font, fill=NAVY)
        y += title_heights[i] + line_gap

    y += gap_after_title - line_gap
    draw.rectangle([text_left, y, text_left + rule_w, y + rule_h], fill=CRIMSON)
    y += rule_h + gap_after_rule
    draw.text((text_left, y - 4), subtitle, font=sub_font, fill=CHAR)

    # Guard: nothing may crowd the frame.
    assert max(title_widths) < col_w - 8, max(title_widths)
    assert sub_w < col_w - 8, sub_w

    out = os.environ.get("OG_OUT", "/workspace/.grok/og-raw.png")
    rgb = Image.new("RGB", (W, H), OFF)
    rgb.paste(im, mask=im.split()[-1])
    rgb.save(out, "PNG")
    print("wrote", out, rgb.size)


if __name__ == "__main__":
    main()
