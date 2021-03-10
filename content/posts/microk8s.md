---
title: "Microk8s Raspberry Pi 4 Cluster"
date: "2021-03-09"
author: "Elliot"
authorTwitter: "codemaster113" #do not include @
cover: "/assets/img/posts/kubernetes_cluster/rack-mount.jpg"
tags: ["RaspberryPi", "Kubernetes", "Homelab"]
keywords: ["how do I add custom domain name to github pages", "github pages domain name", "custom domain name", "static blog website"]
description: "Process for setting up microk8s cluster with Raspberry Pis"
showFullContent: false
draft: "true"
---

Learning Kubernetes has been on my list of things to learn for a long time. Instead of building out a cluster in one of the various cloud providers, I opted to build my own cluster in my homelab.

# Hardware

# Imaging SD Card

I used 4 Raspberry Pi 4 8GB models for the four nodes, with one acting as the master node. Microk8s requires `Ubuntu 16.04` or later as opposed to the normal raspbian OS that is usually used with Raspberry Pi's. I used the [Official Raspberry Pi Imager](https://www.raspberrypi.org/software/) software to flash `Ubuntu Server 20.10 64-bit server`

{{< figure src="/assets/img/posts/kubernetes_cluster/raspberry_pi_imager.png" >}}

# Install MicroK8s

# Adding Nodes to Master

# Enable Dashboard

