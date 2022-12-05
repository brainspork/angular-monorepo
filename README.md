# AngularMonorepo

This project was created to show how to set up an angular monorepo with discrete applications, shared libraries, and Docker/helm support.

## Setup
### Set up angular projects
1. Generate the project infrastructure `ng new angular-monorepo --create-application false`
    - this command generates angular.json, package.json, and all the other angular infrastructure sans the actual application
2. From the `angular-monorepo` directory, generate your applications and libraries by running:
    - `ng g application app-one --routing --style=scss`
    - `ng g application app-two --routing --style=scss`
    - `ng g lib shared-library`
3. In the `angular.json` file, add baseHref to the `architect.build.options` section of the app-one and app-two projects
4. In the `angular.json` file, enable scss by adding the following to the shared-library project section
```json
"schematics": {
  "@schematics/angular:component": {
    "style": "scss"
  }
}
```
5. In your `project/shared-library` folder, add a `styles.scss` file
6. In the `ng-package.json` file in your shared-library, add the following to include the scss file in the build
```json
"assets":[
  "styles.scss"
]
```
7. Add necessary start, build scripts to `package.json`

### Set up Docker support
1. Add `.dockerignore` to monorepo root
2. Add `Dockerfile` to app-one and app-two
3. Add `nginx.conf` file to app-one and app-two
4. Add `default.conf.template` file to app-one and app-two
5. Build out `Dockerfile`
   - When building the file, use the monorepo root as the docker run context
6. For local development convenience add docker build, tag, and push scripts to `package.json`

### Set up helm
1. From the monorepo root, run `helm create helm` to generate a helm chart
2. Update the applications `name` in `helm/Chart.yaml`
3. Update the `service.selector.app` in `helm/values.yaml`
4. Enable ingress
    - Change `ingress.enabled` to `true` in `helm/values.yaml`
    - Add `kubernetes.io/ingress.class: nginx` annotation to `ingress.annotations` in `helm/values.yaml`
5. Add `values.yaml` file to app-one and app-two projects
6. Set up app specific image pull and ingress variables
7. For local development convenience add helm upgrade scripts to `package.json`
    - you must add `-f ./helm/values.yaml` followed by `-f ./projects/app-*/values.yaml` in the upgrade command so the application's values override the defaults
    - the `--install app-*` command will install the chart if it doesn't exist. It will also add app-* instance labels and other clarifying info on top of the default `angular-monorepo` chart application name

## Local Development
Helm charts can be run locally using minikube. Running them this way makes debugging charts a little easier. k9s is also a helpful tool for monitoring your minikube cluster. These instructions assume you have already done the [monorepo setup steps](#Setup)

1. Install [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. Install [k9s](https://k9scli.io/topics/install/) (if desired)
3. Enable minikube ingress with `minikube addons enable ingress`
4. Start minikube with `minikube start`
5. Update your hosts file with a map of 127.0.0.1 to your chosen host (minikube.test in the current repo)
6. Run `minikube tunnel` and keep the terminal open
7. Run docker build, tag, push commands from `package.json`
8. Run helm upgrade commands from `package.json`
9. Visit your site (minikube.test/one/)