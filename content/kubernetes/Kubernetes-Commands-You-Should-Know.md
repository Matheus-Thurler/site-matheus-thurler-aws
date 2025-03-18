---
title: Kubernetes Commands You Should Know
slug: kubernetes-commands-you-should-know
tag: kubernetes
description: Kubernetes Commands You Should Know
thumb: 'https://media-site-matheus-nuxt.s3.amazonaws.com/kubectl.jpeg'
content: kubernetes
open: 1
en: 1
---
# Kubernetes Commands You Should Know

Kubernetes Essential Commands

Kubernetes, also known as K8s, is an open source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It groups the containers that make up the application into logical units for easy management and discovery. Kubernetes is based on a declarative model, where you specify the desired state for your cluster, and Kubernetes works to ensure that state is maintained.

To interact with a Kubernetes cluster, you use the kubectl command-line tool. Here are some of the most useful kubectl commands:

Basic Commands

    kubectl get: Retrieves a list of Kubernetes objects.
    kubectl describe: Displays detailed information about a Kubernetes object.
    kubectl create: Creates a new Kubernetes object from a file or definition.
    kubectl apply: Apply a configuration to a Kubernetes object.
    kubectl delete: Deletes a Kubernetes object.
    kubectl scale: Sets the number of replicas of a deployment controller.
    kubectl logs: Displays the logs of a container.
    kubectl exec: Runs a command on a container.
    kubectl port-forward: Forwards one or more local ports to a Pod.

Advanced Commands

    kubectl rollout: Manages deployment rollouts.
    kubectl cluster-info: Displays information about the cluster.
    kubectl config: Manages configuration files.
    kubectl drain: Drains a node for maintenance.
    kubectl cordon: Marks a node as unschedulable.
    kubectl top: Displays node or Pod metrics.

Other Useful Commands

    kubectl explain: Provides documentation for Kubernetes resources.
    kubectl edit: Edits a Kubernetes object.
    kubectl diff: Compares a manifest with the current cluster configuration.

Shortcuts

Most kubectl commands have shortcuts. For example, you can use kubectl get pods or kubectl get po.

Options

Most kubectl commands accept additional options. For example, you can use -n or --namespace to specify a namespace.

Help

To get more information about a specific kubectl command, you can use kubectl help <command>.
Final Thoughts

This is an overview of some of the most useful kubectl commands.