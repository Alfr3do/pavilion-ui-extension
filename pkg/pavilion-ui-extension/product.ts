import { IPlugin } from '@shell/core/types';
const BLANK_CLUSTER = '_';

export function init($plugin: IPlugin, store: any) {
  const YOUR_PRODUCT_NAME = 'myProductName';
  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';
  const COLD_FRONT_PAGE_NAME = 'Lease Management';
  const HARBOR_PAGE_NAME = 'Image Repository';
  const JHUB_PAGE_NAME = 'AIP JupyterHub';
  const DESKTOP_PAGE_NAME = 'Remote Desktop';

  const {
    product,
    configureType,
    virtualType,
    basicType
  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

  // registering a top-level product
  product({
    svg:    require('./icons/aip.svg'),
    inStore: 'management',
    weight:  100,
    to:      {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ COLD_FRONT_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  // defining a k8s resource as page
//  configureType(YOUR_K8S_RESOURCE_NAME, {
//    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',
//    isCreatable: true,
//    isEditable:  true,
//    isRemovable: true,
//    showAge:     true,
//    showState:   true,
//    canYaml:     true,
//    customRoute: {
//      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,
//      params: {
//        product:  YOUR_PRODUCT_NAME,
//        cluster:  BLANK_CLUSTER,
//       // resource: YOUR_K8S_RESOURCE_NAME
//      }
//    }
//  });

  // creating a custom page
  virtualType({
    labelKey: 'some.translation.key',
    name:     COLD_FRONT_PAGE_NAME,
    route:    {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ COLD_FRONT_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });
  virtualType({
    labelKey: 'some.translation.key2',
    name:     HARBOR_PAGE_NAME,
    route:    {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ HARBOR_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });
  virtualType({
    labelKey: 'some.translation.key3',
    name:     JHUB_PAGE_NAME,
    route:    {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ JHUB_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });
  virtualType({
    labelKey: 'some.translation.key4',
    name:     DESKTOP_PAGE_NAME,
    route:    {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ DESKTOP_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });
  // registering the defined pages as side-menu entries
  //basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);
  basicType([ COLD_FRONT_PAGE_NAME, HARBOR_PAGE_NAME, JHUB_PAGE_NAME, DESKTOP_PAGE_NAME ]);
}