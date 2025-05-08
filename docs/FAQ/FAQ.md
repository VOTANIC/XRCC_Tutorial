---
sidebar_position: 1
sidebar_label: Frequently Asked Questions (FAQ)
---

import TOCInline from '@theme/TOCInline';

# Frequently Asked Questions

This page is under construction...

Feel free to contact us on [Discord](https://discord.gg/Fq86WKbtaN) or with the in-app Reporter if you have other questions.


# Table of Contents
<TOCInline toc={toc} />

# Question

## Image / Media object

### Why do transparent objects sometimes disappear or appear in the wrong order?
:::tip Answer
This issue occurs when multiple transparent or semi-transparent objects (like images or UI elements) overlap in your view. The system may not always display them in the correct order. This is a **known limitation of Unity**, the engine XRCC is built on. For example, one transparent object might unexpectedly appear on top of another, even if it should be behind it. This can make objects seem like they disappear or behave unpredictably.

To avoid this issue:
1. Try to avoid placing transparent objects so that they overlap in your view.
2. If overlapping is unavoidable, consider using opaque (solid) objects / textures instead of transparent ones where possible.

For a more detailed explanation of this issue and additional best practices, see [Handling Transparent and Translucent Objects](<Handling-Transparent-and-Translucent Objects.md>).
:::

## Model

### Why do my object become a black and purple colored cube?
:::tip Answer
If you see this model in your project, its mean the model is missing and we can not find the original model asset.

There are 2 possible causes and solutions:

1. The original model was deleted. You can confirm this by checking the existing model with Asset Panel. You can solve this by re-importing the model, and change the model to the imported asset (or just delete the object if it is no longer useful).

2. You are missing a CC Package. If your project used CC Packages, make sure the packages is placed in the `PredefinedDBs` folder **before** launching XRCC.
:::

## Upgrade

### I used to able to do XXX in XRCC 2.0, why I cannot do it in XRCC 3.0?
:::tip Answer
During the XRCC 3.0 upgrade, we have improved and redesigned some feature we find confusing to user. As a result, the control or workflow of some feature are modified, and the existing users from 2.0 may need to adopt the changes.

For the full change from 2.0 to 3.0, you can reference to [Version 2 to Version 3 Migration Note](MigrationNote2to3.md). If you believe some feature is missing or have any issue, feel free to contact us.
:::






