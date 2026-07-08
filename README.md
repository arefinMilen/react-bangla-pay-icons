# react-bangla-pay-icons

A collection of clean, lightweight, and vectorized React SVG icons for Bangladeshi Mobile Financial Services (MFS) and payment gateways such as bKash, Nagad, Rocket, Upay, Cellfin, Tap, Pathao Pay, and more.

These icons are optimized for React, Next.js, and modern bundlers. They are fully tree-shakeable, typed with TypeScript, and scale to any size via standard SVG props.

## Available Icons

This package currently ships **13 icons**. Each is exported as a named React component (PascalCase):

| Component | Payment Service |
| --- | --- |
| `Bkash` | bKash |
| `Nagad` | Nagad |
| `Rocket` | Rocket (DBBL) |
| `Upay` | Upay |
| `BanglaQr` | Bangla QR |
| `Cellfin` | CellFin |
| `IslamicWallet` | Islamic Wallet |
| `MeghnaPay` | Meghna Pay |
| `PathaoPay` | Pathao Pay |
| `Pocket` | Pocket |
| `Shamadhan` | Shamadhan |
| `Tap` | Tap |
| `Wallet` | Wallet |

## Installation

Install the package via npm:

```bash
npm install react-bangla-pay-icons
```

Or with yarn:

```bash
yarn add react-bangla-pay-icons
```

Or with pnpm:

```bash
pnpm add react-bangla-pay-icons
```

## Usage

Import the icons directly into your React or Next.js component:

```tsx
import React from 'react';
import {
  Bkash,
  Nagad,
  Rocket,
  Upay,
  BanglaQr,
  Cellfin,
  Tap,
  PathaoPay,
} from 'react-bangla-pay-icons';

function CheckoutPage() {
  return (
    <div className="payment-options">
      <h3>Select Payment Method</h3>

      <button>
        <Bkash /> Pay with bKash
      </button>

      <button>
        <Nagad width={64} className="custom-icon-class" /> Pay with Nagad
      </button>

      <button>
        <Rocket height={48} /> Pay with Rocket
      </button>

      <button>
        <Upay /> Pay with Upay
      </button>

      <button>
        <Cellfin /> Pay with CellFin
      </button>

      <button>
        <Tap /> Pay with Tap
      </button>

      <button>
        <PathaoPay /> Pay with Pathao Pay
      </button>

      <button>
        <BanglaQr /> Show QR Code
      </button>
    </div>
  );
}

export default CheckoutPage;
```

## Props

All icons support standard SVG properties:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| width | string \| number | '1em' | Custom width of the SVG |
| height | string \| number | '1em' | Custom height of the SVG |
| className | string | undefined | Custom CSS class |
| ...props | SVGProps | n/a | Any other standard SVG attributes such as style or onClick |

## License

MIT
