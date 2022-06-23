---
id: cloud-faq
title: Memgraph Cloud - Frequently asked questions
sidebar_label: Memgraph Cloud
slug: /faq/cloud
---

## Pricing any payment


### What is the pricing?

You can estimate the cost of Memgraph Cloud's service by selecting your cloud region and instance size with our [Cost Calculator](https://cloud.memgraph.com/pricing) or you can check them out at [Project rates](/docs/memgraph-cloud/payment#project-rates))


### How can I use a coupon that I got for Memgraph Cloud?
First you need to add a credit card to your account. Then you can apply the coupon.

### What will happen to my instance after the free trial?
It will be stopped for next 7 days. If you wish to continue, add a payment method.

## Projects

### How many projects and snapshots can I create? Why I can’t create more than 3 projects? 
That is the initial limit for new users. If want to create more projects, [let us know](/help-center).

### Why I can’t create more than 5 snapshots? 
That is the initial limit for new users. If want to create more snapshots,  [let us know](/help-center).

### How do I upgrade a RAM instance? 
First you need to create a snapshot. Next, restore it as a new project.
New project will always be equal or larger that starting project in terms of RAM. If your initial project is 8GB RAM, you can restore its snapshot to 8, 16 or 32 GB RAM.

### I created a 2GB RAM, but Memgraph Labs says there is total of 1.54GB available. Why is that so?
A par of RAM is allocated to the operating system and other services. They usually take 13-15% of the total RAM. Approximate free RAM is: 
- 1GB RAM Memgraph Cloud project has about 860 MB free RAM
- 2GB RAM Memgraph Cloud project has about 1.60 GB free RAM
- 4GB RAM Memgraph Cloud project has about 3.40 GB free RAM
- 8GB RAM Memgraph Cloud project has about 6.7 GB free RAM
- 16GB RAM Memgraph Cloud project has about 14 GB free RAM
- 32GB RAM Memgraph Cloud project has about 28 GB free RAM

### I’ve created a new instance and when I try to connect to it: It says unable to connect.
In general, Memgraph loads all the MAGE algorithms and sometimes it takes few seconds more at the initial state to load them all.

### I’ve paused my project and resumed it, but my Memgraph’s IP is different now? 
When you pause your project, usually the IP stays the same, but sometimes your IP can be released and a new one will be allocated. You will always have a new IP in the connection details.

### How can I retrieve my project password?

If you have forgotten your project password we can't help you. We don't have a way of finding out or resetting your project password.

### How can I connect to my project?

You can connect to an instance running within the Memgraph Cloud project via **Memgraph Lab**, a visual interface, **mgconsole**, command-line interface, or one of many drivers. You can find detailed instructions in [Memgraph Cloud documentation](/docs/memgraph-cloud/cloud-connect).

### How can I backup my project?

A project is backed up by creating a snapshot with Amazon EBS. You cannot create a snapshot if you are using a 14-day free trial version of Memgraph Cloud. You can find detailed instructions in [Memgraph Cloud documentation](/docs/memgraph-cloud/cloud-projects#back-up-a-project).

### How can I resize my project?





## Available cloud platforms

### Is AWS available?
Yes, Memgraph cloud is running at AWS.

### Is GCP available?
No, at the moment Memgraph cloud is not avaliable at Google Cloud Platform.