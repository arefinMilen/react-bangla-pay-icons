# react-bangla-pay-icons

A collection of clean, lightweight, and vectorized React SVG icons for Bangladeshi Mobile Financial Services (MFS) payment gateways such as bKash, Nagad, Rocket, Upay, and BanglaQR support.

These icons are optimized for React, Next.js, and modern bundlers.

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
import { Bkash, Nagad, Rocket, Upay, BanglaQr } from 'react-bangla-pay-icons';

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
