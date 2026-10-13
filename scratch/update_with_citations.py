# -*- coding: utf-8 -*-
"""
Update techdatadb/技術文件摘要與重點.md with exact original source citations (原文出處).
Strict rules:
- 標題: 以檔名或第一頁 title 為主
- 原文出處: 完整列出官方文號/報告名稱/版本/發布資訊
- 重點: 一個摘要、三條重點 (台灣用詞)
- 應用: 參考檔案內容
- 絕對不出現「原廠」二字
"""

import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_FILE = os.path.join(ROOT_DIR, 'techdatadb', '技術文件摘要與重點.md')

CITATIONS = [
    # 01 - 04 (原理機制)
    "化學反應機構專題圖解：Tyzor® Organic Titanates Crosslinking Mechanism Scheme",
    "化學反應機構專題圖解：Tyzor® Catalytic Esterification Mechanism Scheme",
    "化學反應機構專題圖解：Tyzor® Sol-Gel Surface Modification Mechanism Scheme",
    "化學反應機構專題圖解：Tyzor® Adhesion Promoter Bridging Mechanism Scheme",

    # 05 - 08 (Tyzor 目錄)
    "Dorf Ketal 官方應用手冊：Tyzor® Adhesives and Sealants / Coatings Line (2025/12)",
    "宏威應用材料產品手冊：Tyzor™ 有機鈦（鋯）酸酯產品目錄 (2026/08)",
    "Dorf Ketal 官方產品指南：Tyzor® Product Guide for Coatings (2025/12)",
    "Dorf Ketal 官方催化指南：Tyzor® Catalysts for Polyols and Polymers (2026/02)",

    # 09 - 20 (Tyzor Application Notes)
    "Dorf Ketal Technical Note: Tyzor® Organic Titanates and Zirconates in Adhesives and Sealants",
    "Dorf Ketal Technical Note (文號: SC0052, 11/11): Tyzor® Bulk Handling Procedures",
    "Dorf Ketal Technical Note (文號: SC0050, 01/12): Tyzor® Catalyst - Plasticizer Production",
    "Dorf Ketal Technical Note (文號: SC0061, 01/12): Tyzor® Titanates Crosslink PVA and Starch for Paper Coatings",
    "Dorf Ketal Technical Note (文號: SC0051, 11/11): Tyzor® Direct Esterification",
    "Dorf Ketal Technical Note (文號: SC0108, 05/12): Tyzor® for Ferrous and Nonferrous Metals",
    "Dorf Ketal Technical Note (文號: SC0046, 11/11): Tyzor® Organic Titanates and Zirconates in Glass Surface Coatings",
    "Dorf Ketal Technical Note: Tyzor® Organic Titanates in Inorganic Filler Modification",
    "Dorf Ketal Technical Note (文號: SC0055, 11/11): Tyzor® Organic Titanates as Surface Primers",
    "Dorf Ketal Technical Note (文號: SC0047, 11/11): Thawing Frozen Tyzor® TPT",
    "Dorf Ketal Technical Note (文號: SC0053, 11/11): Tyzor® Transesterification",
    "Dorf Ketal Technical Note (文號: SC0045, 11/11): Tyzor® Vapor Pressure vs. Temperature",

    # 21 - 24 (Tyzor TI)
    "Dorf Ketal Technical Information: Tyzor® ACtivate™ 422 Plastic Packaging for Food Contact (FDA 21 CFR 177.1630 / EFSA)",
    "Dorf Ketal Technical Information: Tyzor® ACtivate™ 422 for PET Bottle Resins",
    "Dorf Ketal Technical Information: Tyzor® IAM Organic Titanate for Inks",
    "Dorf Ketal Specialty Catalyst Division Product Bulletin: Tyzor® IAM A New Additive for Solvent-Based Printing Inks",

    # 25 - 29 (Unilink / Clearlink)
    "Dorf Ketal 官方產品手冊：Clearlink® and Unilink® Crosslinkers and Chain Extenders (2025/12)",
    "Dorf Ketal Technical Information (文號: SC0031, 09/11 / Rev 2017/07): CLEARLINK® 1000 Aliphatic Amine for Polyurea Coatings Systems",
    "Dorf Ketal Technical Information: UNILINK® 1030 Catalyst for Cast Elastomers",
    "Dorf Ketal Technical Information: UNILINK® 4200 Aromatic Diamine for Flexible Polyurethane Foams",
    "Dorf Ketal Technical Information: UNILINK® 4200 Aromatic Diamine for Elastomeric Coatings",

    # 30 - 31 (Orion 目錄)
    "Orion Engineered Carbons 官方產品技術指標手冊（亞太地區中文版）",
    "Orion Engineered Carbons 官方技術手冊：Specialty Carbon Blacks Technical Data Asia Pacific (Brochure EN)",

    # 32 - 43 (Orion Application Notes)
    "Orion Engineered Carbons Technical Information 1480 (TI 1480): Fastness and Resistance Properties of Specialty Carbon Blacks",
    "Orion Engineered Carbons Technical Information 1451 (TI 1451): Handling of Carbon Black",
    "Orion Engineered Carbons 應用技術手冊：Carbon Black Pigments in Modern Coating Systems",
    "Orion Engineered Carbons Technical Information 1454 (TI 1454): Specialty Carbon Blacks for Synthetic Fibers",
    "Orion Engineered Carbons Technical Information 1484 (TI 1484): Short Dispersion Guideline for Specialty Carbon Blacks",
    "Orion Engineered Carbons Technical Information 1455 (TI 1455): Specialty Carbon Blacks for Industrial Coatings",
    "Orion Engineered Carbons Technical Information 1482 (TI 1482): Specialty Carbon Blacks for Inkjet Inks",
    "Orion Engineered Carbons Technical Information 1456 (TI 1456): Specialty Carbon Blacks for Powder Coatings",
    "Orion Engineered Carbons Technical Information 1452 (TI 1452): Specialty Carbon Blacks for Printing Inks",
    "Orion Engineered Carbons Technical Information 1459 (TI 1459): Specialty Carbon Blacks for Tinting Coatings",
    "Orion Engineered Carbons Technical Information 1453 (TI 1453): Carbon Black Pigment for Food Packaging Printing Inks",
    "Orion Engineered Carbons Technical Information 1483 (TI 1483): Carbon Blacks with Low and Very Low Levels of PAHs",

    # 44 - 45 (Orion TI FW 310)
    "Orion Engineered Carbons 技術信息 1485 (TI 1485 CN): COLOUR BLACK FW 310 水性和溶劑型塗料用超高黑度特種炭黑",
    "Orion Engineered Carbons Technical Information 1485 (TI 1485 EN): COLOUR BLACK FW 310 Carbon Black with Deepest Blackness",

    # 46 - 47 (MPI 目錄)
    "Micro Powders, Inc. 官方產品手冊 (2026 Edition): PTFE Replacements - Specialty Wax Additives and Fine Powders",
    "Micro Powders, Inc. 全系列產品目錄 (2026 Edition): Specialty Wax Additives and Fine Powders",

    # 48 - 59 (MPI Application Notes)
    "Micro Powders, Inc. 應用選型指南 (2025 Edition): Advanced Composite Selector Guide PFAS Free",
    "Micro Powders, Inc. 技術公報 (2024 Edition): How to Disperse Micronized Wax",
    "Micro Powders, Inc. 產品應用手冊：MicroTouch Soft Touch Additives",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Can & Container Coatings",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Energy Curable Inks & Coatings",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Industrial Coatings",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Industrial Floor Coatings",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Powder Coatings",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Printing Inks & OPV's",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Wood Coatings",
    "Micro Powders, Inc. 產業選型指南 (2026 Edition): Architectural Coatings",
    "Micro Powders, Inc. 配方指南 (Rev 10/16): MicroTouch Starting Point Formulations",

    # 60 - 74 (MPI TI)
    "Micro Powders, Inc. 產品性能研究報告 (Revised 07/2024): PolyGlide 1226XF Product Performance Study",
    "Micro Powders, Inc. 應用研究報告 (04/15): PropylMatte 31 HD and AquaMatte Matting Efficiency Study",
    "Micro Powders, Inc. 應用研究報告：MicroKlear KL-418AL Performance Study",
    "Micro Powders, Inc. 產品性能研究報告 (2024 Edition): MicroMatte 1415-EZ Product Performance Study",
    "Micro Powders, Inc. 應用研究報告 (Rev 08/2022): MP-22, MPP-620F, MPP-635F Printing Ink Rub Resistance Study (針對 MP-22 VF)",
    "Micro Powders, Inc. 應用研究報告 (Rev 08/2022): MP-22, MPP-620F, MPP-635F Printing Ink Rub Resistance Study (針對 MP-22XF)",
    "Micro Powders, Inc. 產品性能研究報告 (Revised 07/2024): MPP-611AL Product Performance Study",
    "Micro Powders, Inc. 應用研究報告 (Rev 08/2022): MP-22, MPP-620F, MPP-635F Printing Ink Rub Resistance Study (針對 MPP-620F)",
    "Micro Powders, Inc. 應用研究報告 (Rev 08/2022): MP-22, MPP-620F, MPP-635F Printing Ink Rub Resistance Study (針對 MPP-620XF)",
    "Micro Powders, Inc. 應用研究報告 (Rev 08/2022): MP-22, MPP-620F, MPP-635F Printing Ink Rub Resistance Study (針對 MPP-635VF)",
    "Micro Powders, Inc. 產品性能研究報告：PolyTuf 1229 Product Performance Study",
    "Micro Powders, Inc. 應用研究報告：AquaMatte and PropylMatte Matting Efficiency Study",
    "Micro Powders, Inc. 產品性能研究報告 (Revised 12/2024): Superslip 6515AL & Superslip 6515AL-EZ Product Performance Study",
    "Micro Powders, Inc. 應用研究報告：Polyfluo 190 and Fluo 300 Abrasion Resistance Study",
    "Micro Powders, Inc. 產品性能研究報告 (Revised 04/2025): MicroTex 950 Product Performance Study"
]

def main():
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    doc_idx = 0

    for l in lines:
        new_lines.append(l)
        if l.startswith("- **路徑**："):
            if doc_idx < len(CITATIONS):
                cite = CITATIONS[doc_idx]
                new_lines.append(f"- **原文出處**：{cite}\n")
                doc_idx += 1

    content = "".join(new_lines)

    # STRICT SANITY CHECK
    forbidden = "\u539f\u5ee0"
    assert forbidden not in content, f"Error: '{forbidden}' found in content!"
    assert content.count("- **原文出處**：") == 74, f"Mismatch: {content.count('- **原文出處**：')} citations added instead of 74"

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully added 74 citations to {OUTPUT_FILE}!")
    print(f"Sanity check passed: '{forbidden}' count = 0.")

if __name__ == '__main__':
    main()
