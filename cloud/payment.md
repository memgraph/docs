---
id: payment
title: Manage payment
sidebar_label: Payment
---

Below are instructions on how to manage Memgraph Cloud payment, and current
Cloud rates. 

## Add a payment method

To add a payment method:

1. Go to **Account** and expand the **Add Credit Card** section
2. Enter *Cardholder Name* and credit card details and **Add Card**
3. Verify the credit card

You can replace the current credit card with a new credit card by following the
same steps, and the **Remove** button will remove the credit card completely. 

## Redeem coupon code

If you get a coupon code, you can add it by:

1. Go to **Account** and expand the **Add Coupon Code** section
2. Enter the coupon code s and **Redeem code**

Each code has an expiration date. If do not create a project or snapshot within
that period, the code will expire. 

Once you redeem a code, it will be applied to your next invoice, regardless of
the amount of fees on the invoice, which means that the whole coupon will
applied even if the value of the coupon is higher than the amount of the invoice
it is applied to. 

## Check paid and due invoices

To check pay and due invoices:

1. Go to **Account** and open the **Invoices** tab
2. Check an estimate for the next payment or the amount of paid invoices 

You can also download paid invoices as PDF to check the cost breakdown.

## Charge rates

Below are daily and monthly project and snapshot rates within the Memgraph Cloud.

## Project rates

Once your 2-week free trial is finished, the cost of the project will be
calculated by the following rates:

| AWS region                   | RAM (GB)  | Disk (GB) | Daily price ($) | Monthly price ($) |
|------------------------------|-----------|-----------|-----------------|-------------------|
| N. Virginia (us-east-1)      | 1         | 11        | 0.55            | 16.61             |
|                              | 2         | 14        | 1.02            | 30.73             |
|                              | 4         | 20        | 1.97            | 58.99             |
|                              | 8         | 32        | 4.85            | 145.45            |
|                              | 16        | 56        | 6.45            | 193.39            |
|                              | 32        | 104       | 12.81           | 384.30            |
| N. California (us-west-1)    | 1         | 11        | 0.65            | 19.63             |
|                              | 2         | 14        | 1.21            | 36.32             |
|                              | 4         | 20        | 2.33            | 69.85             |
|                              | 8         | 32        | 5.66            | 169.74            |
|                              | 16        | 56        | 7.19            | 215.72            |
|                              | 32        | 104       | 14.29           | 428.66            |
| Frankfurt (eu-central-1)     | 1         | 11        | 0.63            | 19.03             |
|                              | 2         | 14        | 1.18            | 35.29             |
|                              | 4         | 20        | 2.26            | 67.80             |
|                              | 8         | 32        | 5.80            | 174.01            |
|                              | 16        | 56        | 7.76            | 232.92            |
|                              | 32        | 104       | 15.44           | 463.07            |
| Hong Kong (ap-east-1)        | 1         | 11        | 0.84            | 25.09             |
|                              | 2         | 14        | 1.56            | 46.90             |
|                              | 4         | 20        | 3.02            | 90.51             |
|                              | 8         | 32        | 6.65            | 199.62            |
|                              | 16        | 56        | 8.54            | 256.28            |
|                              | 32        | 104       | 16.98           | 509.27            |
| Sydney (ap-southeast-2)      | 1         | 11        | 0.70            | 21.13             |
|                              | 2         | 14        | 1.30            | 38.98             |
|                              | 4         | 20        | 2.48            | 74.52             |
|                              | 8         | 32        | 6.06            | 181.76            |
|                              | 16        | 56        | 7.74            | 232.06            |
|                              | 32        | 104       | 15.36           | 460.84            |
| Ohio (ap-southeast-2)        | 1         | 11        | 0.55            | 16.61             |
|                              | 2         | 14        | 1.02            | 30.73             |
|                              | 4         | 20        | 1.97            | 58.99             |
|                              | 8         | 32        | 4.85            | 145.45            |
|                              | 16        | 56        | 6.45            | 193.39            |
|                              | 32        | 104       | 12.81           | 384.30            |

## Snapshot rates

The size of a snapshot is 8 GB smaller than the disk size the project is
using. If you are using 1 GB of RAM and 11 GB of disk, the snapshot size is 3GB.
Snapshots will be charged by the following rates:

| AWS region                       | Source project size |Disk (GB) | Daily price ($) | Monthly price ($) |
|----------------------------------|---------------------|-----------|-----------------|-------------------|
| N. Virginia (us-east-1)          | 1 GB RAM            | 3         | 0.01            | 0.29              |
|                                  | 2 GB RAM            | 6         | 0.02            | 0.59              |
|                                  | 4 GB RAM            | 12        | 0.04            | 1.18              |
|                                  | 8 GB RAM            | 24        | 0.08            | 2.35              |
|                                  | 16 GB RAM           | 48        | 0.16            | 4.70              |
|                                  | 32 GB RAM           | 96        | 0.32            | 9.40              |
| N. California (us-west-1)        | 1 GB RAM            | 3         | 0.01            | 0.32              |
|                                  | 2 GB RAM            | 6         | 0.02            | 0.65              |
|                                  | 4 GB RAM            | 12        | 0.04            | 1.30              |
|                                  | 8 GB RAM            | 24        | 0.09            | 2.59              |
|                                  | 16 GB RAM           | 48        | 0.17            | 5.18              |
|                                  | 32 GB RAM           | 96        | 0.34            | 10.37             |
| Frankfurt (eu-central-1)         | 1 GB RAM            | 3         | 0.01            | 0.32              |
|                                  | 2 GB RAM            | 6         | 0.02            | 0.65              |
|                                  | 4 GB RAM            | 12        | 0.04            | 1.30              |
|                                  | 8 GB RAM            | 24        | 0.09            | 2.59              |
|                                  | 16 GB RAM           | 48        | 0.17            | 5.18              |
|                                  | 32 GB RAM           | 96        | 0.35            | 10.37             |
| Hong Kong (ap-east-1)            | 1 GB RAM            | 3         | 0.01            | 0.32              |
|                                  | 2 GB RAM            | 6         | 0.02            | 0.65              |
|                                  | 4 GB RAM            | 12        | 0.04            | 1.30              |
|                                  | 8 GB RAM            | 24        | 0.09            | 2.59              |
|                                  | 16 GB RAM           | 48        | 0.17            | 5.18              |
|                                  | 32 GB RAM           | 96        | 0.35            | 10.37             |
| Sydney (ap-southeast-2)          | 1 GB RAM            | 3         | 0.01            | 0.32              |
|                                  | 2 GB RAM            | 6         | 0.02            | 0.65              |
|                                  | 4 GB RAM            | 12        | 0.04            | 1.30              |
|                                  | 8 GB RAM            | 24        | 0.09            | 2.59              |
|                                  | 16 GB RAM           | 48        | 0.17            | 5.18              |
|                                  | 32 GB RAM           | 96        | 0.35            | 10.37             |
| Ohio (us-east-2)                 | 1 GB RAM            | 3         | 0.01            | 0.29              |
|                                  | 2 GB RAM            | 6         | 0.02            | 0.59              |
|                                  | 4 GB RAM            | 12        | 0.04            | 1.18              |
|                                  | 8 GB RAM            | 24        | 0.08            | 2.35              |
|                                  | 16 GB RAM           | 48        | 0.16            | 4.70              |
|                                  | 32 GB RAM           | 96        | 0.31            | 9.40              |