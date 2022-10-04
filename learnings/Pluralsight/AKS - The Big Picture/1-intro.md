# Initial glossary
- microservice - Decoupled from each other. Allowing to develop, update, deploy, manage independently. 
    - cons: Difficult to manage communication, utilization
    - resolve: Need for a orchestrator 
- vertical scaling - Add more cpu. ram to make the server bigger
- horizontal scaling - Add more servers, and add a load balancer on top  
- containers - Lightweight-ness of a process, while providing the isolation of an operating system. No Host OS like VM's. "Namespaces" provide the isolation. 
    - Namespace kinds 
        - Mount/mnt
        - Process ID/pid
        - Network/net
        - Inter-process communication/ipc
        - UTS (hostname)
        - User ID/user
    - Linux Control groups (Cgroups) are behind this isolation
    - Docker is the most popular 
    - Images - Contains the filesystem and the executable path
    - Registry - Host images

- kubernetes - An orchestrator. Enables the ops to team to focus on the entire infrastructure of the organization as a single giant hardware. Individual IT teams do not need to be aware of the ops.  
    - Master node and worker nodes.
    - Developer gives an App descriptor to the master node, which is run on the cluster of  worker nodes. For example developer will say run 5 instances of my app + db, and specify which apps should be deployed together (co-located)
    - Master node - API server, Scheduler, Controller (handling replications, node failure ..), etcd (datastore)
    - Worker nodes - Container runtime (docker), Kubelet (talks to the api server and manages the containers on its node), Kube proxy (load balance)


Steps to deploy the k8s way

1. Package as one or more containers
2. Push to Registry
3. Post app descriptor to K8s API server (colocation, replication, ..)
4. Scheduler will pick it up
5. Kubelet instructs the nodes to download the container
6. Kubelet runs the container

### Kubectl
CLI for running commands on a k8s cluster

`kubectl <operation> <object> <resource name> <flags>`

### Pod
Made of one or more containers. Smallest unit of k8s. Affinity (specify which node to run on). All containers in a pod is on the same node. Network config is shared within a pod. Containers within a pod can share files through attached volume. 
- Replica set - Describes how many instances of the pod should be running on the same cluster. Provide self healing

### Namespaces
Represents a collection of pods. Can provide resource access limits and quotas. If no namespace is provided, `default` is used. 



### AKS
Azure Kubernetes System. Deployment, management, operation of K8s. Master node is managed by Microsoft. 

### ACI
Azure Container Instances. Individual docker instances. ACI connector for K8s, allows containers to be deployed in K8s easily. 

### ACR
Azure Container Repository. Geo replicated. 

### Service Fabric
Infrastructure of azure. 
