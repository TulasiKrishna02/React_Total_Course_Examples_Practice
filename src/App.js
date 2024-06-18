import logo from './logo.svg';
import './App.css';

//imports related to class components
import BasicClassComponentExample from './components/basic_class_component_example';
import BasicClassComponentProps from './components/basic_class_component_props_example';
import BasicClassComponentState from './components/basic_class_component_state_example';
import BasicClassComponentStateEventBinding from './components/basic_class_components_state_setstate_event_binding_styles_example';
import BasicClassComponentCondtionalRender from './components/basic_class_component_conditional_rendering_example';
import BasicClassComponentALifeCycle from './components/basic_class_component_A_lifecycle_hooks_example';
import BasicClassComponentInlineCSS from './components/basic_class_component_inline_css_example';

import BasicClassComponentExternalCSS from './components/basic_class_component_external_css_example';
import BasicClassComponentParentExternalCSS from './components/basic_class_component_parent_external_css_example';
import BasicClassComponentParentModuleCSS from './components/basic_class_component_parent_module_css_example';
import BasicClassComponentListDisplay from  './components/basic_class_component_list_display_example';
import BasicClassComponentElementRef from './components/basic_class_component_element_ref_example';
import BasicClassComponentParentElementRef from './components/basic_class_component_parent_element_ref_example';
import BasicClassComponentPortal from './components/basic_class_component_portal_example';
import BasicClassComponentParentFragment from './components/basic_class_component_parent_fragment_example';
import {Provider} from './components/user_context';
import BasicClassComponentC from './components/basic_class_component_c_example';
import BasicClassComponentChangeTitle from './components/basic_class_component_change_title_example';
import BasicClassComponentChangeTitleTwo from './components/basic_class_component_change_title_example_two';


//imports related to function Components
import BasicFunctionComponent from './components/basic_function_component_example';
import BasicFunctionComponentProps from './components/basic_function_component_props_example';
import BasicFunctionComponentInlineCSS from './components/basic_function_component_inline_css_example';
import BasicFunctionComponentExternalCSS from './components/basic_function_component_external_css_example';
import BasicFunctionComponentPortal from './components/basic_function_component_portal_example';
import BasicFunctionComponentChangeTitle from './components/basic_function_component_change_title_example';
import BasicFunctionComponentChangeTitleTwo from './components/basic_function_component_change_title_example_two';
import MainMenu from './components/mainmenu';

function App() {
  return (
    <div className="App">
      <h1>This is  React App</h1>
		{/*Class Components */}
		{/*<BasicClassComponentExample></BasicClassComponentExample>*/}
		{/*<BasicClassComponentProps name="Ramesh" technology="ReactJS"></BasicClassComponentProps>*/}
		{/*<BasicClassComponentState></BasicClassComponentState>*/}
		{/*<BasicClassComponentStateEventBinding></BasicClassComponentStateEventBinding>*/}
		{/*<BasicClassComponentCondtionalRender></BasicClassComponentCondtionalRender>*/}
		
		{/*<BasicClassComponentALifeCycle></BasicClassComponentALifeCycle>*/}
		{/*<BasicClassComponentInlineCSS></BasicClassComponentInlineCSS>*/}
		{/*<BasicClassComponentExternalCSS></BasicClassComponentExternalCSS>*/}
		{/*<BasicClassComponentParentExternalCSS></BasicClassComponentParentExternalCSS>*/}
		{/*<BasicClassComponentParentModuleCSS></BasicClassComponentParentModuleCSS>*/}
		{/*<BasicClassComponentListDisplay></BasicClassComponentListDisplay>*/}
		{/*<BasicClassComponentElementRef></BasicClassComponentElementRef>*/}
		{/*<BasicClassComponentParentElementRef></BasicClassComponentParentElementRef>*/}
		{/*<BasicClassComponentPortal></BasicClassComponentPortal>*/}
		{/*<BasicClassComponentParentFragment></BasicClassComponentParentFragment>*/}
		{/*<Provider value="Ramesh">
		<BasicClassComponentC></BasicClassComponentC>
		</Provider>*/}
		
		{/*<BasicClassComponentChangeTitle></BasicClassComponentChangeTitle>*/}
		{/*<BasicClassComponentChangeTitleTwo></BasicClassComponentChangeTitleTwo>*/}
		
		{/*Function Components*/}
		{/*<BasicFunctionComponent></BasicFunctionComponent>*/}
		{/*<BasicFunctionComponentProps name="Ramesh" technology="ReactJS"></BasicFunctionComponentProps>*/}
		{/*<BasicFunctionComponentInlineCSS></BasicFunctionComponentInlineCSS>*/}
		{/*<BasicFunctionComponentExternalCSS></BasicFunctionComponentExternalCSS>*/}
		{/*<BasicFunctionComponentPortal></BasicFunctionComponentPortal>*/}
		{/*<BasicFunctionComponentChangeTitle></BasicFunctionComponentChangeTitle>*/}
		{/*<BasicFunctionComponentChangeTitleTwo></BasicFunctionComponentChangeTitleTwo>*/}
		<MainMenu></MainMenu>
		
    </div>
  );
}

export default App;
