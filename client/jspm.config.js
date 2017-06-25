SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "homepage/": "homepage/",
    "admin/": "admin/",
    "client/": ""
  },
  browserConfig: {
    "baseURL": "/static/js",
    "bundles": {
      "build.js": [
        "homepage/main.js",
        "homepage/propsroute.js",
        "npm:react-router-dom@4.1.1/index.js",
        "npm:react-router-dom@4.1.1.json",
        "npm:react-router-dom@4.1.1/withRouter.js",
        "npm:react-router@4.1.1/index.js",
        "npm:react-router@4.1.1.json",
        "npm:react-router@4.1.1/withRouter.js",
        "npm:react-router@4.1.1/Route.js",
        "npm:react-router@4.1.1/matchPath.js",
        "npm:path-to-regexp@1.7.0/index.js",
        "npm:path-to-regexp@1.7.0.json",
        "npm:isarray@0.0.1/index.js",
        "npm:isarray@0.0.1.json",
        "npm:prop-types@15.5.10/index.js",
        "npm:prop-types@15.5.10.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:prop-types@15.5.10/factoryWithThrowingShims.js",
        "npm:prop-types@15.5.10/lib/ReactPropTypesSecret.js",
        "npm:fbjs@0.8.12/lib/invariant.js",
        "npm:fbjs@0.8.12.json",
        "npm:fbjs@0.8.12/lib/emptyFunction.js",
        "npm:prop-types@15.5.10/factoryWithTypeCheckers.js",
        "npm:prop-types@15.5.10/checkPropTypes.js",
        "npm:fbjs@0.8.12/lib/warning.js",
        "npm:react@15.5.4/react.js",
        "npm:react@15.5.4.json",
        "npm:react@15.5.4/lib/React.js",
        "npm:react@15.5.4/lib/ReactElementValidator.js",
        "npm:react@15.5.4/lib/getIteratorFn.js",
        "npm:react@15.5.4/lib/canDefineProperty.js",
        "npm:react@15.5.4/lib/checkReactTypeSpec.js",
        "npm:react@15.5.4/lib/ReactComponentTreeHook.js",
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
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:hoist-non-react-statics@1.2.0/index.js",
        "npm:hoist-non-react-statics@1.2.0.json",
        "npm:react-router@4.1.1/Switch.js",
        "npm:react-router@4.1.1/StaticRouter.js",
        "npm:react-router@4.1.1/Router.js",
        "npm:invariant@2.2.2/browser.js",
        "npm:invariant@2.2.2.json",
        "npm:history@4.6.1/PathUtils.js",
        "npm:history@4.6.1.json",
        "npm:react-router@4.1.1/Redirect.js",
        "npm:react-router@4.1.1/Prompt.js",
        "npm:react-router@4.1.1/MemoryRouter.js",
        "npm:history@4.6.1/createMemoryHistory.js",
        "npm:history@4.6.1/createTransitionManager.js",
        "npm:history@4.6.1/LocationUtils.js",
        "npm:value-equal@0.2.1/index.js",
        "npm:value-equal@0.2.1.json",
        "npm:resolve-pathname@2.1.0/index.js",
        "npm:resolve-pathname@2.1.0.json",
        "npm:react-router-dom@4.1.1/matchPath.js",
        "npm:react-router-dom@4.1.1/Switch.js",
        "npm:react-router-dom@4.1.1/StaticRouter.js",
        "npm:react-router-dom@4.1.1/Router.js",
        "npm:react-router-dom@4.1.1/Route.js",
        "npm:react-router-dom@4.1.1/Redirect.js",
        "npm:react-router-dom@4.1.1/Prompt.js",
        "npm:react-router-dom@4.1.1/NavLink.js",
        "npm:react-router-dom@4.1.1/Link.js",
        "npm:react-router-dom@4.1.1/MemoryRouter.js",
        "npm:react-router-dom@4.1.1/HashRouter.js",
        "npm:history@4.6.1/createHashHistory.js",
        "npm:history@4.6.1/DOMUtils.js",
        "npm:react-router-dom@4.1.1/BrowserRouter.js",
        "npm:history@4.6.1/createBrowserHistory.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/objectWithoutProperties.js",
        "npm:systemjs-plugin-babel@0.0.21.json",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/extends.js",
        "homepage/components/admin.js",
        "homepage/components/app.js",
        "homepage/components/categorybytype.js",
        "homepage/components/featuredsection.js",
        "homepage/containers/category.js",
        "homepage/containers/staticcontent.js",
        "npm:react-redux@5.0.5/lib/index.js",
        "npm:react-redux@5.0.5.json",
        "npm:react-redux@5.0.5/lib/connect/connect.js",
        "npm:react-redux@5.0.5/lib/connect/selectorFactory.js",
        "npm:react-redux@5.0.5/lib/connect/verifySubselectors.js",
        "npm:react-redux@5.0.5/lib/utils/warning.js",
        "npm:react-redux@5.0.5/lib/connect/mergeProps.js",
        "npm:react-redux@5.0.5/lib/utils/verifyPlainObject.js",
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
        "npm:react-redux@5.0.5/lib/connect/mapStateToProps.js",
        "npm:react-redux@5.0.5/lib/connect/wrapMapToProps.js",
        "npm:react-redux@5.0.5/lib/connect/mapDispatchToProps.js",
        "npm:redux@3.6.0/lib/index.js",
        "npm:redux@3.6.0.json",
        "npm:redux@3.6.0/lib/utils/warning.js",
        "npm:redux@3.6.0/lib/compose.js",
        "npm:redux@3.6.0/lib/applyMiddleware.js",
        "npm:redux@3.6.0/lib/bindActionCreators.js",
        "npm:redux@3.6.0/lib/combineReducers.js",
        "npm:redux@3.6.0/lib/createStore.js",
        "npm:symbol-observable@1.0.4/index.js",
        "npm:symbol-observable@1.0.4.json",
        "npm:symbol-observable@1.0.4/lib/index.js",
        "npm:symbol-observable@1.0.4/lib/ponyfill.js",
        "npm:react-redux@5.0.5/lib/utils/shallowEqual.js",
        "npm:react-redux@5.0.5/lib/components/connectAdvanced.js",
        "npm:react-redux@5.0.5/lib/utils/PropTypes.js",
        "npm:react-redux@5.0.5/lib/utils/Subscription.js",
        "npm:react-redux@5.0.5/lib/components/Provider.js",
        "homepage/containers/categorybytype.js",
        "homepage/containers/fetchcontent.js",
        "homepage/actions.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js",
        "homepage/components/about.js",
        "homepage/components/styles/about.less",
        "npm:systemjs-less-plugin@2.0.0.json",
        "homepage/components/comercialrent.js",
        "homepage/components/styles/comercialrent.less",
        "homepage/components/services.js",
        "homepage/components/styles/services.less",
        "homepage/components/contact.js",
        "homepage/components/styles/contact.less",
        "homepage/components/footer.js",
        "homepage/components/house.js",
        "homepage/components/carousel.js",
        "homepage/containers/house.js",
        "homepage/components/home.js",
        "homepage/components/styles/home.less",
        "homepage/components/header.js",
        "homepage/components/languageselector.js",
        "homepage/containers/languageselector.js",
        "homepage/components/salesdropdown.js",
        "homepage/components/categorydropdown.js",
        "homepage/components/logo.js",
        "homepage/scroll.js",
        "homepage/reducers.js",
        "npm:redux-thunk@2.2.0/lib/index.js",
        "npm:redux-thunk@2.2.0.json",
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
      ],
      "client/build.js": [
        "client/main.js",
        "homepage/propsroute.js",
        "npm:react-router-dom@4.1.1/index.js",
        "npm:react-router-dom@4.1.1.json",
        "npm:react-router-dom@4.1.1/withRouter.js",
        "npm:react-router@4.1.1/index.js",
        "npm:react-router@4.1.1.json",
        "npm:react-router@4.1.1/withRouter.js",
        "npm:react-router@4.1.1/Route.js",
        "npm:react-router@4.1.1/matchPath.js",
        "npm:path-to-regexp@1.7.0/index.js",
        "npm:path-to-regexp@1.7.0.json",
        "npm:isarray@0.0.1/index.js",
        "npm:isarray@0.0.1.json",
        "npm:prop-types@15.5.10/index.js",
        "npm:prop-types@15.5.10.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:prop-types@15.5.10/factoryWithThrowingShims.js",
        "npm:prop-types@15.5.10/lib/ReactPropTypesSecret.js",
        "npm:fbjs@0.8.12/lib/invariant.js",
        "npm:fbjs@0.8.12.json",
        "npm:fbjs@0.8.12/lib/emptyFunction.js",
        "npm:prop-types@15.5.10/factoryWithTypeCheckers.js",
        "npm:prop-types@15.5.10/checkPropTypes.js",
        "npm:fbjs@0.8.12/lib/warning.js",
        "npm:react@15.5.4/react.js",
        "npm:react@15.5.4.json",
        "npm:react@15.5.4/lib/React.js",
        "npm:react@15.5.4/lib/ReactElementValidator.js",
        "npm:react@15.5.4/lib/getIteratorFn.js",
        "npm:react@15.5.4/lib/canDefineProperty.js",
        "npm:react@15.5.4/lib/checkReactTypeSpec.js",
        "npm:react@15.5.4/lib/ReactComponentTreeHook.js",
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
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:hoist-non-react-statics@1.2.0/index.js",
        "npm:hoist-non-react-statics@1.2.0.json",
        "npm:react-router@4.1.1/Switch.js",
        "npm:react-router@4.1.1/StaticRouter.js",
        "npm:react-router@4.1.1/Router.js",
        "npm:invariant@2.2.2/browser.js",
        "npm:invariant@2.2.2.json",
        "npm:history@4.6.1/PathUtils.js",
        "npm:history@4.6.1.json",
        "npm:react-router@4.1.1/Redirect.js",
        "npm:react-router@4.1.1/Prompt.js",
        "npm:react-router@4.1.1/MemoryRouter.js",
        "npm:history@4.6.1/createMemoryHistory.js",
        "npm:history@4.6.1/createTransitionManager.js",
        "npm:history@4.6.1/LocationUtils.js",
        "npm:value-equal@0.2.1/index.js",
        "npm:value-equal@0.2.1.json",
        "npm:resolve-pathname@2.1.0/index.js",
        "npm:resolve-pathname@2.1.0.json",
        "npm:react-router-dom@4.1.1/matchPath.js",
        "npm:react-router-dom@4.1.1/Switch.js",
        "npm:react-router-dom@4.1.1/StaticRouter.js",
        "npm:react-router-dom@4.1.1/Router.js",
        "npm:react-router-dom@4.1.1/Route.js",
        "npm:react-router-dom@4.1.1/Redirect.js",
        "npm:react-router-dom@4.1.1/Prompt.js",
        "npm:react-router-dom@4.1.1/NavLink.js",
        "npm:react-router-dom@4.1.1/Link.js",
        "npm:react-router-dom@4.1.1/MemoryRouter.js",
        "npm:react-router-dom@4.1.1/HashRouter.js",
        "npm:history@4.6.1/createHashHistory.js",
        "npm:history@4.6.1/DOMUtils.js",
        "npm:react-router-dom@4.1.1/BrowserRouter.js",
        "npm:history@4.6.1/createBrowserHistory.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/objectWithoutProperties.js",
        "npm:systemjs-plugin-babel@0.0.21.json",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/extends.js",
        "admin/components/app.js",
        "admin/components/adminpanel.js",
        "admin/actions.js",
        "admin/requests.js",
        "admin/components/pictures.js",
        "admin/containers/requests.js",
        "npm:react-redux@5.0.5/lib/index.js",
        "npm:react-redux@5.0.5.json",
        "npm:react-redux@5.0.5/lib/connect/connect.js",
        "npm:react-redux@5.0.5/lib/connect/selectorFactory.js",
        "npm:react-redux@5.0.5/lib/connect/verifySubselectors.js",
        "npm:react-redux@5.0.5/lib/utils/warning.js",
        "npm:react-redux@5.0.5/lib/connect/mergeProps.js",
        "npm:react-redux@5.0.5/lib/utils/verifyPlainObject.js",
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
        "npm:react-redux@5.0.5/lib/connect/mapStateToProps.js",
        "npm:react-redux@5.0.5/lib/connect/wrapMapToProps.js",
        "npm:react-redux@5.0.5/lib/connect/mapDispatchToProps.js",
        "npm:redux@3.6.0/lib/index.js",
        "npm:redux@3.6.0.json",
        "npm:redux@3.6.0/lib/utils/warning.js",
        "npm:redux@3.6.0/lib/compose.js",
        "npm:redux@3.6.0/lib/applyMiddleware.js",
        "npm:redux@3.6.0/lib/bindActionCreators.js",
        "npm:redux@3.6.0/lib/combineReducers.js",
        "npm:redux@3.6.0/lib/createStore.js",
        "npm:symbol-observable@1.0.4/index.js",
        "npm:symbol-observable@1.0.4.json",
        "npm:symbol-observable@1.0.4/lib/index.js",
        "npm:symbol-observable@1.0.4/lib/ponyfill.js",
        "npm:react-redux@5.0.5/lib/utils/shallowEqual.js",
        "npm:react-redux@5.0.5/lib/components/connectAdvanced.js",
        "npm:react-redux@5.0.5/lib/utils/PropTypes.js",
        "npm:react-redux@5.0.5/lib/utils/Subscription.js",
        "npm:react-redux@5.0.5/lib/components/Provider.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js",
        "admin/components/test.js",
        "admin/components/header.js",
        "admin/components/styles/header.less",
        "npm:systemjs-less-plugin@2.0.0.json",
        "admin/components/intro.js",
        "admin/components/loginform.js",
        "admin/containers/auth.js",
        "homepage/components/app.js",
        "homepage/components/categorybytype.js",
        "homepage/components/featuredsection.js",
        "homepage/containers/category.js",
        "homepage/containers/staticcontent.js",
        "homepage/containers/categorybytype.js",
        "homepage/containers/fetchcontent.js",
        "homepage/actions.js",
        "homepage/components/about.js",
        "homepage/components/styles/about.less",
        "homepage/components/comercialrent.js",
        "homepage/components/styles/comercialrent.less",
        "homepage/components/services.js",
        "homepage/components/styles/services.less",
        "homepage/components/contact.js",
        "homepage/components/styles/contact.less",
        "homepage/components/footer.js",
        "homepage/components/house.js",
        "homepage/components/carousel.js",
        "homepage/containers/house.js",
        "homepage/components/home.js",
        "homepage/components/styles/home.less",
        "homepage/components/header.js",
        "homepage/components/languageselector.js",
        "homepage/containers/languageselector.js",
        "homepage/components/salesdropdown.js",
        "homepage/components/categorydropdown.js",
        "homepage/components/logo.js",
        "homepage/scroll.js",
        "admin/reducers.js",
        "homepage/reducers.js",
        "npm:redux-persist@4.8.1/lib/index.js",
        "npm:redux-persist@4.8.1.json",
        "npm:redux-persist@4.8.1/lib/purgeStoredState.js",
        "npm:redux-persist@4.8.1/lib/constants.js",
        "npm:redux-persist@4.8.1/lib/persistStore.js",
        "npm:redux-persist@4.8.1/lib/utils/setImmediate.js",
        "npm:redux-persist@4.8.1/lib/createPersistor.js",
        "npm:json-stringify-safe@5.0.1/stringify.js",
        "npm:json-stringify-safe@5.0.1.json",
        "npm:redux-persist@4.8.1/lib/defaults/asyncLocalStorage.js",
        "npm:redux-persist@4.8.1/lib/getStoredState.js",
        "npm:redux-persist@4.8.1/lib/createTransform.js",
        "npm:redux-persist@4.8.1/lib/autoRehydrate.js",
        "npm:redux-persist@4.8.1/lib/utils/isStatePlainEnough.js",
        "npm:redux-thunk@2.2.0/lib/index.js",
        "npm:redux-thunk@2.2.0.json",
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
      "core-js": "npm:core-js@2.4.1",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.24.1",
      "babel-plugin-add-module-exports": "npm:babel-plugin-add-module-exports@0.2.1"
    },
    "packages": {
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
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
      },
      "npm:babel-plugin-transform-react-jsx@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.24.1",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-commonjs@6.24.1": {
        "map": {
          "babel-types": "npm:babel-types@6.24.1",
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-template": "npm:babel-template@6.24.1",
          "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.24.1"
        }
      },
      "npm:babel-template@6.24.1": {
        "map": {
          "lodash": "npm:lodash@4.17.4",
          "babel-types": "npm:babel-types@6.24.1",
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-traverse": "npm:babel-traverse@6.24.1",
          "babylon": "npm:babylon@6.17.2"
        }
      },
      "npm:babel-plugin-transform-strict-mode@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-types": "npm:babel-types@6.24.1"
        }
      },
      "npm:babel-traverse@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-types": "npm:babel-types@6.24.1",
          "invariant": "npm:invariant@2.2.2",
          "lodash": "npm:lodash@4.17.4",
          "babylon": "npm:babylon@6.17.2",
          "debug": "npm:debug@2.6.8",
          "babel-code-frame": "npm:babel-code-frame@6.22.0",
          "babel-messages": "npm:babel-messages@6.23.0",
          "globals": "npm:globals@9.17.0"
        }
      },
      "npm:babel-runtime@6.23.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
        }
      },
      "npm:babel-code-frame@6.22.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@3.0.1",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:babel-messages@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0"
        }
      },
      "npm:debug@2.6.8": {
        "map": {
          "ms": "npm:ms@2.0.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "client": {
      "main": "main.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "react": true
          }
        },
        "*.css": {
          "loader": "css"
        },
        "*.less": {
          "loader": "less"
        }
      }
    },
    "npm:babel-template@6.25.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babylon": "npm:babylon@6.17.4",
        "babel-types": "npm:babel-types@6.25.0",
        "lodash": "npm:lodash@4.17.4",
        "babel-traverse": "npm:babel-traverse@6.25.0"
      }
    },
    "npm:babel-helper-function-name@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-template": "npm:babel-template@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1"
      }
    },
    "npm:babel-types@6.25.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-traverse@6.25.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babylon": "npm:babylon@6.17.4",
        "lodash": "npm:lodash@4.17.4",
        "debug": "npm:debug@2.6.8",
        "globals": "npm:globals@9.18.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.25.0"
      }
    }
  },
  map: {
    "@hot": "@empty",
    "history": "npm:history@4.6.1"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "jsrsasign": "npm:jsrsasign@7.2.1",
    "redux-persist": "npm:redux-persist@4.8.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.35",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "less": "npm:systemjs-less-plugin@2.0.0",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "promise-polyfill": "npm:promise-polyfill@6.0.2",
    "react": "npm:react@15.5.4",
    "react-dom": "npm:react-dom@15.5.4",
    "react-router": "npm:react-router@4.1.1",
    "react-router-dom": "npm:react-router-dom@4.1.1",
    "redux": "npm:redux@3.6.0",
    "react-redux": "npm:react-redux@5.0.5",
    "redux-thunk": "npm:redux-thunk@2.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "systemjs-plugin-css": "npm:systemjs-plugin-css@0.1.35",
    "twbs/bootstrap": "github:twbs/bootstrap@4.0.0-alpha.6",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
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
        "readable-stream": "npm:readable-stream@2.3.2"
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
        "base64-js": "npm:base64-js@1.2.1",
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
        "randombytes": "npm:randombytes@2.0.5",
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
        "bn.js": "npm:bn.js@4.11.7",
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
        "randombytes": "npm:randombytes@2.0.5",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "randombytes": "npm:randombytes@2.0.5",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7"
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
        "safe-buffer": "npm:safe-buffer@5.1.1",
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
        "bn.js": "npm:bn.js@4.11.7",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
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
        "bn.js": "npm:bn.js@4.11.7",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.7",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.1",
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
        "bn.js": "npm:bn.js@4.11.7",
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
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.1",
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
    },
    "github:twbs/bootstrap@4.0.0-alpha.6": {
      "map": {
        "jquery": "npm:jquery@2.2.4",
        "tether": "github:HubSpot/tether@1.4.0"
      }
    },
    "npm:systemjs-less-plugin@2.0.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.35"
      }
    },
    "npm:react-router@4.1.1": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.5.10",
        "warning": "npm:warning@3.0.0",
        "history": "npm:history@4.6.1"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:history@4.6.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@3.0.0",
        "resolve-pathname": "npm:resolve-pathname@2.1.0",
        "value-equal": "npm:value-equal@0.2.1"
      }
    },
    "npm:react-router-dom@4.1.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.5.10",
        "history": "npm:history@4.6.1",
        "react-router": "npm:react-router@4.1.1"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hash.js@1.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:readable-stream@2.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "string_decoder": "npm:string_decoder@1.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:redux-persist@4.8.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "lodash-es": "npm:lodash-es@4.17.4",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1"
      }
    }
  }
});
