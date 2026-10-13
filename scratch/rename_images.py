import os

dir_p = r"d:\Jay\vscode\attech0824 - test\scratch\images_1_to_4"
mapping = {
    "交聯劑": "01_crosslinker.png",
    "催化劑": "02_catalyst.png",
    "表面改性": "03_surface_modification.png",
    "附著力": "04_adhesion.png",
}

for f in os.listdir(dir_p):
    full = os.path.join(dir_p, f)
    for k, v in mapping.items():
        if k in f:
            target = os.path.join(dir_p, v)
            if os.path.exists(target):
                os.remove(target)
            os.rename(full, target)
            print(f"Renamed to {v}")

print("Done renaming.")
