# Contributing to es-dibs

The es-dibs registry is an open collection of DIB (Data Information Base) definitions for industrial IoT devices. EdgeStack maintains the taxonomy; anyone can contribute DIB definitions.

---

## Two things live here

| Path | What it is | Who edits it |
|---|---|---|
| `registry/taxonomy.json` | The canonical industry ID system and tag standards | EdgeStack only |
| `dibs/` | Manufacturer and community DIB definitions | Anyone via PR |

---

## Requesting a taxonomy entry

The taxonomy (`registry/taxonomy.json`) defines the stable dot-notation IDs and standard tag definitions for device classes. EdgeStack manages all changes to it.

**To request a new industry, sub-industry, device type, or tag standard:**

1. Open a [GitHub Discussion](https://github.com/edgestackio/es-dibs/discussions) using the **Taxonomy Request** category
2. Describe the device class, what it measures, and which existing taxonomy branch it belongs to
3. EdgeStack will review and add the entry in the next taxonomy release

Do not submit PRs directly against `registry/taxonomy.json` — they will be closed and converted to a Discussion.

---

## Contributing a DIB definition

A DIB definition describes how a specific device publishes data and maps its tags to the taxonomy standard.

### File location

```
dibs/{your-org}/{product-or-category}/{dib-name}_v{version}.json
```

Examples:
```
dibs/emerson/roc809/roc809-oil-storage-tank_v1.0.0.json
dibs/totalflow/g4/g4-wellhead-controller_v1.0.0.json
dibs/acme-water/pump-controller/pump-controller_v1.0.0.json
```

### Naming rules

- **Directory**: your GitHub org or company slug (lowercase, hyphens)
- **Filename**: `{dib-name}_v{semver}.json` — dib name in kebab-case, semver with `v` prefix
- **`dib_code`**: uppercase, format `{ORG}-{MODEL}-{CAPABILITY}` e.g. `EMERSON-ROC809-TANK-BATTERY`
- **`version`**: semver string matching the filename — increment major for breaking tag changes

### Required fields

```json
{
  "dib_code": "EMERSON-ROC809-TANK-BATTERY",
  "name": "Emerson ROC809 — Oil Storage Tank",
  "version": "1.0.0",
  "tag_definitions": [...]
}
```

### Recommended fields

```json
{
  "dib_id": "10.20.10",
  "description": "ROC809 tag mapping for oil storage tank monitoring at the tank battery.",
  "industry": "oil-gas",
  "is_shareable": true
}
```

`dib_id` declares which taxonomy device class this DIB implements. Use the dot-notation ID from `registry/taxonomy.json`. If the appropriate device type doesn't exist yet, open a Taxonomy Request Discussion first.

### Tag definition format

```json
{
  "tag_code": "TG1_LEVEL",
  "name": "Tank Level",
  "canonical_name": "tank.level",
  "standard_unit": "ft",
  "data_type": "Double",
  "dib_tag_id": "10.20.10.10",
  "is_required": true,
  "display_order": 10,
  "description": "Oil level measured from tank bottom."
}
```

- `tag_code`: the exact tag name as published by the device (uppercase)
- `canonical_name`: dot-notation normalized name from the taxonomy
- `dib_tag_id`: the taxonomy tag ID this tag maps to

### Submit your PR

1. Fork the repository
2. Add your DIB file(s) under `dibs/{your-org}/`
3. Run validation locally (see below)
4. Open a pull request — describe what device the DIB covers and which taxonomy entry it implements

---

## Running validation locally

```bash
pip install jsonschema
python .github/workflows/validate.yml  # or run the inline script directly
```

Or copy and run the validation script from `.github/workflows/validate.yml`.

---

## Versioning

- **Patch** (`1.0.0` → `1.0.1`): fix a typo, correct a unit, update a description
- **Minor** (`1.0.0` → `1.1.0`): add new optional tags
- **Major** (`1.0.0` → `2.0.0`): rename or remove tags, change `dib_code`, change `canonical_name` or `standard_unit`

Breaking changes require a new filename with the updated version. Old versions remain in the registry indefinitely.
