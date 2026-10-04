# Networking OS

This fork is the implementation foundation for the Networking OS product.

## Hard rule
Reuse existing open-source implementations before writing a feature from scratch. New greenfield functionality requires a documented reason that a reasonable reusable implementation was not available.

## Locked primary navigation
Home / Discover / Companies / People / Pipeline / Applications

## Locked networking loop
Discover -> Company -> Best People -> Person Research -> Personalized Message -> LinkedIn (human sends) -> Mark Sent -> Follow-up -> Reply -> Call -> Opportunity

## Locked pipeline
To Contact -> Contacted -> Replied -> Call Scheduled -> Opportunity

Follow-up is a task/state attached to a relationship, not a separate pipeline column.

## Foundation policy
- Preserve PingCRM CRM, identity resolution, relationship timeline, scoring, follow-up, auth/database, and extension infrastructure where useful.
- Borrow license-compatible implementations from other open-source projects instead of recreating them.
- LinkedIn final sending remains human-controlled.
- main remains the clean upstream-derived baseline during initial transformation.
- Active product work occurs on networking-os.
