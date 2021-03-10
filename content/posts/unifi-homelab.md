---
title: "UniFi Controller on Raspberry Pi"
date: "2021-03-08"
author: "Elliot"
authorTwitter: "codemaster113" #do not include @
cover: "/assets/img/posts/unifi-controller.png"
tags: ["RaspberryPi", "UniFi"]
keywords: ["how do I add custom domain name to github pages", "github pages domain name", "custom domain name", "static blog website"]
description: "UniFi Controller setup on Raspberry Pi"
showFullContent: false
---

This article details the steps to install a UniFi controller on a raspberry pi.

# Quick Jump
> - [Prepare Raspberry Pi](#prepare-rasbperry-pi)
> - [UniFi Controller Install](#install-unifi-controller)
> - [UniFi Controller Setup](#controller-setup)

## Prepare Rasbperry Pi

```bash
sudo apt update
sudo apt upgrade
```

Install Java JDK

```bash
sudo apt install openjdk-8-jre-headless
```

Install and enable `rng-tools` for random number generation within the UniFi software

```bash
sudo apt install rng-tools
sudo nano /etc/default/rng-tools

// Uncomment line
HRNGDEVICE=/dev/hwrng

sudo systemctl restart rng-tools
```

## Install UniFi Controller

Add UniFi repo to apt sources list

```bash
echo 'deb https://www.ui.com/downloads/unifi/debian stable ubiquiti' | sudo tee /etc/apt/sources.list.d/100-ubnt-unifi.list
```

Add repo GPG key

```bash
sudo wget -O /etc/apt/trusted.gpg.d/unifi-repo.gpg https://dl.ui.com/unifi/unifi-repo.gpgs
```

Update package list and install controller

```bash
sudo apt update
sudo apt install unifi
```

## Controller Setup

At this point the controller should be installed and available at `https://[IPADDRESS]:8443`. To get the IP address of the raspberry pi run `hostname -I`.

Once the website resolves, there will be a few initial config steps including naming the controller, logging in with your Ubiquiti account, and basic network configuration prompts. After these steps are finished your controller is ready to adopt other UniFi devices.