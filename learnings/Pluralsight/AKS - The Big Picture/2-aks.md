## AKS

Test if the image runs runs locally

```
docker container run --name myapp -d -p 3000:3000 ghoshanjega/party-games:latest
```

Create K8s cluster on Azure portal (only exception is to use Azure ACI for network), After creating, 

```
az account show
az configure --defaults group=usResourceGroup
az aks get-credentials --name aks

kubectl config current-context
kubectl get nodes
```

## Kubernetes deployement
https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/

### Using Imperative commands top deploy

```shell
kubectl create deployment games --image=ghoshanjega/party-games:latest --replicas=1 #deploy
kubectl get deployments # check deployment
kubectl get pods # check running pods
kubectl expose deployment games --type=LoadBalancer --port=3000 --target-port=3000 # create a load balancer on top of the deployment
kubectl get svc --watch # see external IP that is created

```

### Scaling the app
```shell
kubectl scale deployment games --replicas=3
```

### Scaling the kube nodes
```shell
kubectl get nodes
az aks scale --resource-group usResourceGroup --name aks --node-count 2 --no-wait
az aks nodepool show --name agentpool --cluster-name aks --query "[count, provisioningState]"
```