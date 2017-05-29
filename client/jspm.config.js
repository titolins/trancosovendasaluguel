SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "client/": "src/"
  },
  browserConfig: {
    "baseURL": "/static/js",
    "bundles": {
      "build.js": [
        "index.js",
        "client/app/index.js",
        "npm:react@15.5.4/react.js",
        "npm:react@15.5.4.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:react@15.5.4/lib/React.js",
        "npm:react@15.5.4/lib/ReactElementValidator.js",
        "npm:fbjs@0.8.12/lib/warning.js",
        "npm:fbjs@0.8.12.json",
        "npm:fbjs@0.8.12/lib/emptyFunction.js",
        "npm:react@15.5.4/lib/getIteratorFn.js",
        "npm:react@15.5.4/lib/canDefineProperty.js",
        "npm:react@15.5.4/lib/checkReactTypeSpec.js",
        "npm:react@15.5.4/lib/ReactComponentTreeHook.js",
        "npm:fbjs@0.8.12/lib/invariant.js",
        "npm:react@15.5.4/lib/ReactCurrentOwner.js",
        "npm:react@15.5.4/lib/reactProdInvariant.js",
        "npm:react@15.5.4/lib/ReactPropTypesSecret.js",
        "npm:react@15.5.4/lib/ReactPropTypeLocationNames.js",
        "npm:react@15.5.4/lib/ReactElement.js",
        "npm:react@15.5.4/lib/ReactElementSymbol.js",
        "npm:object-assign@4.1.1/index.js",
        "npm:object-assign@4.1.1.json",
        "npm:react@15.5.4/lib/onlyChild.js",
        "npm:react@15.5.4/lib/ReactVersion.js",
        "npm:react@15.5.4/lib/ReactPropTypes.js",
        "npm:prop-types@15.5.10/factory.js",
        "npm:prop-types@15.5.10.json",
        "npm:prop-types@15.5.10/factoryWithTypeCheckers.js",
        "npm:prop-types@15.5.10/checkPropTypes.js",
        "npm:prop-types@15.5.10/lib/ReactPropTypesSecret.js",
        "npm:react@15.5.4/lib/ReactDOMFactories.js",
        "npm:react@15.5.4/lib/ReactClass.js",
        "npm:fbjs@0.8.12/lib/emptyObject.js",
        "npm:react@15.5.4/lib/ReactNoopUpdateQueue.js",
        "npm:react@15.5.4/lib/ReactComponent.js",
        "npm:react@15.5.4/lib/ReactPureComponent.js",
        "npm:react@15.5.4/lib/ReactChildren.js",
        "npm:react@15.5.4/lib/traverseAllChildren.js",
        "npm:react@15.5.4/lib/KeyEscapeUtils.js",
        "npm:react@15.5.4/lib/PooledClass.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.21.json",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js",
        "client/reducers.js",
        "npm:redux@3.6.0/lib/index.js",
        "npm:redux@3.6.0.json",
        "npm:redux@3.6.0/lib/utils/warning.js",
        "npm:redux@3.6.0/lib/compose.js",
        "npm:redux@3.6.0/lib/applyMiddleware.js",
        "npm:redux@3.6.0/lib/bindActionCreators.js",
        "npm:redux@3.6.0/lib/combineReducers.js",
        "npm:lodash@4.17.4/isPlainObject.js",
        "npm:lodash@4.17.4.json",
        "npm:lodash@4.17.4/isObjectLike.js",
        "npm:lodash@4.17.4/_getPrototype.js",
        "npm:lodash@4.17.4/_overArg.js",
        "npm:lodash@4.17.4/_baseGetTag.js",
        "npm:lodash@4.17.4/_objectToString.js",
        "npm:lodash@4.17.4/_getRawTag.js",
        "npm:lodash@4.17.4/_Symbol.js",
        "npm:lodash@4.17.4/_root.js",
        "npm:lodash@4.17.4/_freeGlobal.js",
        "npm:redux@3.6.0/lib/createStore.js",
        "npm:symbol-observable@1.0.4/index.js",
        "npm:symbol-observable@1.0.4.json",
        "npm:symbol-observable@1.0.4/lib/index.js",
        "npm:symbol-observable@1.0.4/lib/ponyfill.js",
        "npm:react-redux@5.0.5/lib/index.js",
        "npm:react-redux@5.0.5.json",
        "npm:react-redux@5.0.5/lib/connect/connect.js",
        "npm:react-redux@5.0.5/lib/connect/selectorFactory.js",
        "npm:react-redux@5.0.5/lib/connect/verifySubselectors.js",
        "npm:react-redux@5.0.5/lib/utils/warning.js",
        "npm:react-redux@5.0.5/lib/connect/mergeProps.js",
        "npm:react-redux@5.0.5/lib/utils/verifyPlainObject.js",
        "npm:react-redux@5.0.5/lib/connect/mapStateToProps.js",
        "npm:react-redux@5.0.5/lib/connect/wrapMapToProps.js",
        "npm:react-redux@5.0.5/lib/connect/mapDispatchToProps.js",
        "npm:react-redux@5.0.5/lib/utils/shallowEqual.js",
        "npm:react-redux@5.0.5/lib/components/connectAdvanced.js",
        "npm:react-redux@5.0.5/lib/utils/PropTypes.js",
        "npm:prop-types@15.5.10/index.js",
        "npm:prop-types@15.5.10/factoryWithThrowingShims.js",
        "npm:react-redux@5.0.5/lib/utils/Subscription.js",
        "npm:invariant@2.2.2/browser.js",
        "npm:invariant@2.2.2.json",
        "npm:hoist-non-react-statics@1.2.0/index.js",
        "npm:hoist-non-react-statics@1.2.0.json",
        "npm:react-redux@5.0.5/lib/components/Provider.js",
        "npm:react-dom@15.5.4/index.js",
        "npm:react-dom@15.5.4.json",
        "npm:react-dom@15.5.4/lib/ReactDOM.js",
        "npm:react-dom@15.5.4/lib/ReactDOMInvalidARIAHook.js",
        "npm:react-dom@15.5.4/lib/DOMProperty.js",
        "npm:react-dom@15.5.4/lib/reactProdInvariant.js",
        "npm:react-dom@15.5.4/lib/ReactDOMNullInputValuePropHook.js",
        "npm:react-dom@15.5.4/lib/ReactDOMUnknownPropertyHook.js",
        "npm:react-dom@15.5.4/lib/EventPluginRegistry.js",
        "npm:react-dom@15.5.4/lib/ReactInstrumentation.js",
        "npm:react-dom@15.5.4/lib/ReactDebugTool.js",
        "npm:fbjs@0.8.12/lib/performanceNow.js",
        "npm:fbjs@0.8.12/lib/performance.js",
        "npm:fbjs@0.8.12/lib/ExecutionEnvironment.js",
        "npm:react-dom@15.5.4/lib/ReactHostOperationHistoryHook.js",
        "npm:react-dom@15.5.4/lib/ReactInvalidSetStateWarningHook.js",
        "npm:react-dom@15.5.4/lib/renderSubtreeIntoContainer.js",
        "npm:react-dom@15.5.4/lib/ReactMount.js",
        "npm:react-dom@15.5.4/lib/shouldUpdateReactComponent.js",
        "npm:react-dom@15.5.4/lib/setInnerHTML.js",
        "npm:react-dom@15.5.4/lib/createMicrosoftUnsafeLocalFunction.js",
        "npm:react-dom@15.5.4/lib/DOMNamespaces.js",
        "npm:react-dom@15.5.4/lib/instantiateReactComponent.js",
        "npm:react@15.5.4/lib/getNextDebugID.js",
        "npm:react-dom@15.5.4/lib/ReactHostComponent.js",
        "npm:react-dom@15.5.4/lib/ReactEmptyComponent.js",
        "npm:react-dom@15.5.4/lib/ReactCompositeComponent.js",
        "npm:fbjs@0.8.12/lib/shallowEqual.js",
        "npm:react-dom@15.5.4/lib/checkReactTypeSpec.js",
        "npm:react-dom@15.5.4/lib/ReactPropTypesSecret.js",
        "npm:react-dom@15.5.4/lib/ReactPropTypeLocationNames.js",
        "npm:react-dom@15.5.4/lib/ReactReconciler.js",
        "npm:react-dom@15.5.4/lib/ReactRef.js",
        "npm:react-dom@15.5.4/lib/ReactOwner.js",
        "npm:react-dom@15.5.4/lib/ReactNodeTypes.js",
        "npm:react-dom@15.5.4/lib/ReactInstanceMap.js",
        "npm:react-dom@15.5.4/lib/ReactErrorUtils.js",
        "npm:react-dom@15.5.4/lib/ReactComponentEnvironment.js",
        "npm:react-dom@15.5.4/lib/ReactUpdates.js",
        "npm:react-dom@15.5.4/lib/Transaction.js",
        "npm:react-dom@15.5.4/lib/ReactFeatureFlags.js",
        "npm:react-dom@15.5.4/lib/PooledClass.js",
        "npm:react-dom@15.5.4/lib/CallbackQueue.js",
        "npm:react-dom@15.5.4/lib/ReactUpdateQueue.js",
        "npm:react-dom@15.5.4/lib/ReactMarkupChecksum.js",
        "npm:react-dom@15.5.4/lib/adler32.js",
        "npm:react-dom@15.5.4/lib/ReactDOMFeatureFlags.js",
        "npm:react-dom@15.5.4/lib/ReactDOMContainerInfo.js",
        "npm:react-dom@15.5.4/lib/validateDOMNesting.js",
        "npm:react-dom@15.5.4/lib/ReactDOMComponentTree.js",
        "npm:react-dom@15.5.4/lib/ReactDOMComponentFlags.js",
        "npm:react-dom@15.5.4/lib/ReactBrowserEventEmitter.js",
        "npm:react-dom@15.5.4/lib/isEventSupported.js",
        "npm:react-dom@15.5.4/lib/getVendorPrefixedEventName.js",
        "npm:react-dom@15.5.4/lib/ViewportMetrics.js",
        "npm:react-dom@15.5.4/lib/ReactEventEmitterMixin.js",
        "npm:react-dom@15.5.4/lib/EventPluginHub.js",
        "npm:react-dom@15.5.4/lib/forEachAccumulated.js",
        "npm:react-dom@15.5.4/lib/accumulateInto.js",
        "npm:react-dom@15.5.4/lib/EventPluginUtils.js",
        "npm:react-dom@15.5.4/lib/DOMLazyTree.js",
        "npm:react-dom@15.5.4/lib/setTextContent.js",
        "npm:react-dom@15.5.4/lib/escapeTextContentForBrowser.js",
        "npm:react-dom@15.5.4/lib/getHostComponentFromComposite.js",
        "npm:react-dom@15.5.4/lib/findDOMNode.js",
        "npm:react-dom@15.5.4/lib/ReactVersion.js",
        "npm:react-dom@15.5.4/lib/ReactDefaultInjection.js",
        "npm:react-dom@15.5.4/lib/SimpleEventPlugin.js",
        "npm:react-dom@15.5.4/lib/getEventCharCode.js",
        "npm:react-dom@15.5.4/lib/SyntheticWheelEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticMouseEvent.js",
        "npm:react-dom@15.5.4/lib/getEventModifierState.js",
        "npm:react-dom@15.5.4/lib/SyntheticUIEvent.js",
        "npm:react-dom@15.5.4/lib/getEventTarget.js",
        "npm:react-dom@15.5.4/lib/SyntheticEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticTransitionEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticTouchEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticDragEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticKeyboardEvent.js",
        "npm:react-dom@15.5.4/lib/getEventKey.js",
        "npm:react-dom@15.5.4/lib/SyntheticFocusEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticClipboardEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticAnimationEvent.js",
        "npm:react-dom@15.5.4/lib/EventPropagators.js",
        "npm:fbjs@0.8.12/lib/EventListener.js",
        "npm:react-dom@15.5.4/lib/SelectEventPlugin.js",
        "npm:react-dom@15.5.4/lib/isTextInputElement.js",
        "npm:fbjs@0.8.12/lib/getActiveElement.js",
        "npm:react-dom@15.5.4/lib/ReactInputSelection.js",
        "npm:fbjs@0.8.12/lib/focusNode.js",
        "npm:fbjs@0.8.12/lib/containsNode.js",
        "npm:fbjs@0.8.12/lib/isTextNode.js",
        "npm:fbjs@0.8.12/lib/isNode.js",
        "npm:react-dom@15.5.4/lib/ReactDOMSelection.js",
        "npm:react-dom@15.5.4/lib/getTextContentAccessor.js",
        "npm:react-dom@15.5.4/lib/getNodeForCharacterOffset.js",
        "npm:react-dom@15.5.4/lib/SVGDOMPropertyConfig.js",
        "npm:react-dom@15.5.4/lib/ReactReconcileTransaction.js",
        "npm:react-dom@15.5.4/lib/ReactInjection.js",
        "npm:react-dom@15.5.4/lib/ReactEventListener.js",
        "npm:fbjs@0.8.12/lib/getUnboundedScrollPosition.js",
        "npm:react-dom@15.5.4/lib/ReactDefaultBatchingStrategy.js",
        "npm:react-dom@15.5.4/lib/ReactDOMTextComponent.js",
        "npm:react-dom@15.5.4/lib/DOMChildrenOperations.js",
        "npm:react-dom@15.5.4/lib/Danger.js",
        "npm:fbjs@0.8.12/lib/createNodesFromMarkup.js",
        "npm:fbjs@0.8.12/lib/getMarkupWrap.js",
        "npm:fbjs@0.8.12/lib/createArrayFromMixed.js",
        "npm:react-dom@15.5.4/lib/ReactDOMTreeTraversal.js",
        "npm:react-dom@15.5.4/lib/ReactDOMEmptyComponent.js",
        "npm:react-dom@15.5.4/lib/ReactDOMComponent.js",
        "npm:react-dom@15.5.4/lib/ReactServerRenderingTransaction.js",
        "npm:react-dom@15.5.4/lib/ReactServerUpdateQueue.js",
        "npm:react-dom@15.5.4/lib/ReactMultiChild.js",
        "npm:react-dom@15.5.4/lib/flattenChildren.js",
        "npm:react-dom@15.5.4/lib/traverseAllChildren.js",
        "npm:react-dom@15.5.4/lib/KeyEscapeUtils.js",
        "npm:react-dom@15.5.4/lib/getIteratorFn.js",
        "npm:react-dom@15.5.4/lib/ReactElementSymbol.js",
        "npm:react-dom@15.5.4/lib/ReactChildReconciler.js",
        "npm:react-dom@15.5.4/lib/ReactDOMTextarea.js",
        "npm:react-dom@15.5.4/lib/LinkedValueUtils.js",
        "npm:react-dom@15.5.4/lib/ReactDOMSelect.js",
        "npm:react-dom@15.5.4/lib/ReactDOMOption.js",
        "npm:react-dom@15.5.4/lib/ReactDOMInput.js",
        "npm:react-dom@15.5.4/lib/DOMPropertyOperations.js",
        "npm:react-dom@15.5.4/lib/quoteAttributeValueForBrowser.js",
        "npm:react-dom@15.5.4/lib/CSSPropertyOperations.js",
        "npm:fbjs@0.8.12/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.12/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.12/lib/hyphenate.js",
        "npm:react-dom@15.5.4/lib/dangerousStyleValue.js",
        "npm:react-dom@15.5.4/lib/CSSProperty.js",
        "npm:fbjs@0.8.12/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.12/lib/camelize.js",
        "npm:react-dom@15.5.4/lib/AutoFocusUtils.js",
        "npm:react-dom@15.5.4/lib/ReactComponentBrowserEnvironment.js",
        "npm:react-dom@15.5.4/lib/ReactDOMIDOperations.js",
        "npm:react-dom@15.5.4/lib/HTMLDOMPropertyConfig.js",
        "npm:react-dom@15.5.4/lib/EnterLeaveEventPlugin.js",
        "npm:react-dom@15.5.4/lib/DefaultEventPluginOrder.js",
        "npm:react-dom@15.5.4/lib/ChangeEventPlugin.js",
        "npm:react-dom@15.5.4/lib/BeforeInputEventPlugin.js",
        "npm:react-dom@15.5.4/lib/SyntheticInputEvent.js",
        "npm:react-dom@15.5.4/lib/SyntheticCompositionEvent.js",
        "npm:react-dom@15.5.4/lib/FallbackCompositionState.js",
        "npm:react-dom@15.5.4/lib/ARIADOMPropertyConfig.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
      "core-js": "npm:core-js@2.4.1"
    },
    "packages": {
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "client": {
      "main": "app/index.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "react": true
          }
        }
      }
    },
    "npm:babel-runtime@6.23.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
      }
    },
    "npm:babel-types@6.24.1": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.24.1",
        "esutils": "npm:esutils@2.0.2"
      }
    }
  },
  map: {
    "@hot": "@empty"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@15.5.4",
    "react-dom": "npm:react-dom@15.5.4",
    "redux": "npm:redux@3.6.0",
    "react-redux": "npm:react-redux@5.0.5",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:react-dom@15.5.4": {
      "map": {
        "prop-types": "npm:prop-types@15.5.10",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:prop-types@15.5.10": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:fbjs@0.8.12": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:react@15.5.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.5.10",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "node-fetch": "npm:node-fetch@1.7.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:node-fetch@1.7.0": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.17"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:readable-stream@2.2.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@1.0.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:string_decoder@1.0.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "pbkdf2": "npm:pbkdf2@3.0.12"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.1"
      }
    },
    "npm:stream-http@2.7.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:react-redux@5.0.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "lodash-es": "npm:lodash-es@4.17.4",
        "create-react-class": "npm:create-react-class@15.5.3",
        "invariant": "npm:invariant@2.2.2",
        "lodash": "npm:lodash@4.17.4",
        "prop-types": "npm:prop-types@15.5.10",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:create-react-class@15.5.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "lodash": "npm:lodash@4.17.4",
        "lodash-es": "npm:lodash-es@4.17.4",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    }
  }
});
