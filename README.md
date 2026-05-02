# es-dibs — EdgeStack DIB Registry

An open registry of **DIB (Data Information Base) definitions** for industrial IoT devices, maintained by [EdgeStack](https://github.com/edgestackio).

---

## What is a DIB?

A DIB definition describes how a specific device publishes its data — what tags it exposes, what units they use, and how they map to a canonical industry standard. DIBs are the bridge between a manufacturer's proprietary tag names and the normalized data that flows through the EdgeStack platform.

---

## Two-layer model

The registry uses a two-layer design that separates the *abstract standard* from the *concrete implementation*:

### Layer 1 — Taxonomy (`registry/taxonomy.json`)

The authoritative industry hierarchy that defines what a device class *ought to* publish. Maintained by EdgeStack. Provides stable dot-notation IDs (e.g. `10.20.10`) and standard tag definitions (canonical names, units, data types) for every device class.

```
10          Oil & Gas
  10.20     Upstream — Tank Battery / Storage
    10.20.10  Oil Storage Tank
      10.20.10.10  level · ft · tank.level
      10.20.10.20  temperature · degF · tank.temperature
```

### Layer 2 — DIB Definitions (`dibs/`)

Manufacturer or community-supplied files that *implement* a taxonomy standard for a specific device. A single physical device (e.g. an Emerson ROC809) may have multiple DIB files — one per capability it monitors.

```
dibs/emerson/roc809/roc809-oil-storage-tank_v1.0.0.json
  dib_id: "10.20.10"           ← declares: "I implement Oil Storage Tank"
  TG1_LEVEL  → tank.level      ← maps real tag name to canonical form
  TG1_TEMP   → tank.temperature
```

---

## File naming

```
dibs/{org}/{product}/{dib-name}_v{semver}.json
```

Example: `dibs/emerson/roc809/roc809-oil-storage-tank_v1.0.0.json`

---

## Industries covered

| ID | Industry |
|---|---|
| 10 | Oil & Gas |
| 20 | Water & Wastewater |
| 30 | Power & Utilities |
| 40 | Buildings & Facilities |
| 50 | Manufacturing & Industrial |
| 60 | Agriculture |
| 70 | Transportation & Logistics |
| 80 | Mining & Extraction |
| 90 | Chemical & Process |
| 100 | Food & Beverage |

See `registry/taxonomy.json` for the complete hierarchy with descriptions and tag standards.

---

## Using DIBs in EdgeStack

1. Browse the `dibs/` directory for your device type
2. Import the JSON file into the DIB Manager
3. The platform maps the device's published tags to canonical form for normalization

---

## Contributing

- **New DIB file**: fork → add to `dibs/{your-org}/` → PR
- **New taxonomy entry**: open a [GitHub Discussion](https://github.com/edgestackio/es-dibs/discussions)

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

---

## Governance

EdgeStack maintains `registry/` and `schemas/`. Community DIBs in `dibs/` are reviewed by the EdgeStack triage team. See [CODEOWNERS](.github/CODEOWNERS).
