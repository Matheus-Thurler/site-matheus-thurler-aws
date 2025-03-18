---
title: How to load image to kind cluster
slug: how-to-load-image-to-kind-cluster
tag: Kubernetes
description: How to load image to kind cluster
thumb: 'https://media-site-matheus-nuxt.s3.amazonaws.com/kind.jpeg'
content: docker
open: 1
en: 1
---
# How to load image to kind cluster

Today I will teach you how to load docker images in your Kind Cluster.
For those who don't know what is a Kind Cluster, it is a tool for running local kubernetes cluster using Docker container "nodes". This is a powerfull tool to test our dockerized applications before deploying into production.

## Step by Step to install Kind cluster in your linux

    ``` bash
    # For AMD64 / x86_64
    [ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.23.0/kind-linux-amd64
    # For ARM64
    [ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.23.0/kind-linux-arm64
    chmod +x ./kind
    sudo mv ./kind /usr/local/bin/kind

1. **Install kubectl:**
   - Download recent version of kubectl:

     ```bash
     curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
     ```
   - Make the binary executable and move to directory including your PATH:

     ```bash
     chmod +x kubectl
     sudo mv kubectl /usr/local/bin/
     ```
   - Verify instalation:

     ```bash
     kubectl version --client
     ```

### 3. Build e Tag Dockerfiles

   ```bash
   docker build -t <dockerfile>:1.0.0 -f .
   ```

### 4. Load Image to the Cluster Kind
   - Use the command `kind load` to load docker images to the Kind Cluster:

     ```bash
     kind load docker-image <dockerfile>:1.0.0
     ```
