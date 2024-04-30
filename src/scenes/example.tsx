import {Layout, Txt, Rect, makeScene2D} from '@motion-canvas/2d';
import {all, beginSlide, createRef, DEFAULT, map, tween, waitFor} from '@motion-canvas/core';
import {CodeBlock, edit, insert, lines, range, remove} from '@motion-canvas/2d/lib/components/CodeBlock';
export default makeScene2D(function* (view) {
  // Create your animations here
  const title = createRef<Txt>();
  view.add(<Txt ref={title} />);
  view.fill('#171923')
  
  const codeRefs = {
    boolsSetup: createRef<CodeBlock>(),
    boolsFunction: createRef<CodeBlock>(),
    enumsSetup: createRef<CodeBlock>(),
    enumSelectDisclaimer: createRef<CodeBlock>(),
    enumsUpdateLogic: createRef<CodeBlock>(),
    enumSelectionState: createRef<CodeBlock>(),
    enumSelectionFunction: createRef<CodeBlock>()
  }
  
  const codeBlocks = {
    boolsSetup: <CodeBlock
        language="js"
        ref={codeRefs.boolsSetup}
        code={`
              const isInScotland = false;
              const isInEngAndWales = false;
              `}
    />,
    boolsFunction: <CodeBlock
        language="js"
        ref={codeRefs.boolsFunction}
        code={`
              function updateDisclaimer() {
                
              }`}
    />,
    enumsSetup: <CodeBlock
        language="js"
        ref={codeRefs.enumsSetup}
        code={`
        const state = {
          ScotlandCoreLong: 'ScotlandCoreLong',
          ScotlandCoreShort: 'ScotlandCoreShort',
          ScotlandBroaderLong: 'ScotlandBroaderLong',
          ScotlandBroaderShort: 'ScotlandBroaderShort',
          EngAndWalesCoreLong: 'EngAndWalesCoreLong',
          EngAndWalesCoreShort: 'EngAndWalesCoreShort',
          EngAndWalesBroaderLong: 'EngAndWalesBroaderLong',
          EngAndWalesBroaderShort: 'EngAndWalesBroaderShort'
        }`}
    />,
    enumSelectDisclaimer:  <CodeBlock
        language="js"
        ref={codeRefs.enumSelectDisclaimer}
        code={`
function selectDisclaimer(disclaimer) {
  switch (disclaimer) {
    case state.ScotlandCoreLong:
      
    case state.ScotlandCoreShort:
      
    case state.ScotlandBroaderLong:
      
    case state.ScotlandBroaderShort:
      
    case state.EngAndWalesCoreLong:
      
    case state.EngAndWalesCoreShort:
      
    case state.EngAndWalesBroaderLong:
      
    case state.EngAndWalesBroaderShort:
      
    default:
      return null
  }`}
    />,
    enumsUpdateLogic: <Layout layout alignItems={'center'} right={[0, 300]}>
      <Rect fill={'#2c303f'} padding={50} radius={20} scale={0.6}>
        <CodeBlock
            language="js"
            ref={codeRefs.enumsUpdateLogic}
            code={`
function updateDisclaimer() {
  const disclaimerName = disclaimerRegion + disclaimerGroup + disclaimerLength;

  Object.assign(disclaimerObject, selectDisclaimer(disclaimerName))
  disclaimerRegion = disclaimerGroup = disclaimerLength = ''
}`}
        />
      </Rect>
    </Layout>,

    enumSelectionState: <CodeBlock
        language="js"
        ref={codeRefs.enumSelectionState}
        code={`
        const state = {
          SELECTING_REGION: 'selectingRegion',
          SELECTING_GROUP: 'selectingGroup',
          SELECTING_LENGTH: 'selectingLength'
        }`}
    />,
    enumSelectionFunction: <CodeBlock
        language="js"
        ref={codeRefs.enumSelectionFunction}
        code={`
        let currentState = 'selectingRegion';
        
        function selectOption(value) {
          switch (currentState) {
            case state.SELECTING_REGION:
            
            case state.SELECTING_GROUP:
            
            case state.SELECTING_LENGTH:
            
            default:
          }
        }`}
    />

  }

  yield * beginSlide('Set region bools');
  yield view.add(codeBlocks.boolsSetup);


  yield * beginSlide('Set group bools');
  yield codeRefs.boolsSetup().edit(0.5, true)`
    ${edit('const isInScotland = false;', 'const isInScotland = false;')}
    ${edit('const isInEngAndWales = false;', 'const isInEngAndWales = false;')}
    ${insert('')}
    ${insert('')}`

  yield waitFor(1)

  yield codeRefs.boolsSetup().edit(0.5)`
    ${edit('const isInScotland = false;', 'const isInScotland = false;')}
    ${edit('const isInEngAndWales = false;', 'const isInEngAndWales = false;')}
    ${edit('', 'const isCore = false;')}
    ${edit('', 'const isBroader = false;')}`


  yield * beginSlide('Add Length Bools');
  yield codeRefs.boolsSetup().edit(0.5)`
    const isInScotland = false;
    const isInEngAndWales = false;
    ${edit('const isCore = false;', 'const isCore = false;')}
    ${edit('const isBroader = false;', 'const isBroader = false;')}
    ${insert('')}
    ${insert('')}`

  yield waitFor(1)

  yield codeRefs.boolsSetup().edit(0.5)`
    const isInScotland = false;
    const isInEngAndWales = false;
    ${edit('const isCore = false;', 'const isCore = false;')}
    ${edit('const isBroader = false;', 'const isBroader = false;')}
    ${edit('', 'const wantsMoreInfo = false;')}
    ${edit('', 'const wantsLessInfo = false;')}`

  yield * beginSlide('Set disclaimer object');
  yield codeRefs.boolsSetup().edit(0.5)`
    const isInScotland = false;
    const isInEngAndWales = false;
    const isCore = false;
    const isBroader = false;
    ${edit('', 'const wantsMoreInfo = false;')}
    ${edit('', 'const wantsLessInfo = false;')}
    ${insert('')}
    ${insert('')}
    ${insert('')}
    ${insert('')}
    ${insert('')}`

  yield waitFor(1)

  yield codeRefs.boolsSetup().edit(0.5)`
    const isInScotland = false;
    const isInEngAndWales = false;
    const isCore = false;
    const isBroader = false;
    ${edit('const wantsMoreInfo = false;', 'const wantsMoreInfo = false;')}
    ${edit('const wantsLessInfo = false;', 'const wantsLessInfo = false;')}
    
    ${edit('', 'let disclaimerObject = {')}
    ${edit('', "  text: '',")}
    ${edit('', "  bgColor: ''")}
    ${edit('', "}")}`


  yield * beginSlide('Set up end');
  yield codeBlocks.boolsSetup.remove();


  yield * beginSlide('Create function');
  yield codeRefs.boolsSetup().remove();
  yield codeRefs.boolsFunction().scale(0.50);
  yield view.add(codeBlocks.boolsFunction)


  yield * beginSlide('Add region conditional');
  yield codeRefs.boolsFunction().edit(0.5, true)`
  function updateDisclaimer() {
    ${edit('', `
    if (isInScotland) {
    
    } else if (isInEngAndWales) {
    
    } else {
    
    }`)}
  }`

  yield * beginSlide('Add group conditionals Scotland');
  yield codeRefs.boolsFunction().edit(0.5)`
  function updateDisclaimer() {
    if (isInScotland) {
      ${edit('', `
      if (isCore.value) {
      
      } else if (isBroader.value) {
      
      } else {
      
      }`)}
    } else if (isInEngAndWales) {
      ${edit('',`
      if (isCore.value) {
      
      } else if (isBroader.value) {
      
      } else {
      
      }`)}
    } else {
    
    }
  }`

  yield * beginSlide('Add group conditionals defensive');
  yield codeRefs.boolsFunction().edit(0.5)`
  function updateDisclaimer() {
    if (isInScotland) {
      if (isCore.value) {
      
      } else if (isBroader.value) {
      
      } else {
      
      }
    } else if (isInEngAndWales) {
      if (isCore.value) {
      
      } else if (isBroader.value) {
      
      } else {
      
      }
    } else {
      ${edit('', `
       console.error('Something went wrong :( ')`)}
    }
  }`

  yield * beginSlide('Zoom in on scotland core logic');
  yield codeRefs.boolsFunction().edit(1.2)`
  function updateDisclaimer() {
    if (isInScotland) {
      if (isCore.value) {
        ${insert(`
          const text = wantsLessInfo.value ? 'Lorem ipsum Short...' :
          wantsMoreInfo.value ? 'Lorem ipsum Long...' :
              'No disclaimer'
          Object.assign(disclaimerObject.value, {
            title: 'Scotland Disclaimer Core',
            text: text,
            bgColor: 'blue'
          });`)}
      } else if (isBroader.value) {
        ${insert(`
          const text = wantsLessInfo.value ? 'Lorem ipsum Short...' :
          wantsMoreInfo.value ? 'Lorem ipsum Long...' :
              'No disclaimer'
          Object.assign(disclaimerObject.value, {
            title: 'Scotland Disclaimer Broader',
            text: text,
            bgColor: 'blue'
          });`)}
      } else {
        ${insert(`console.error('Something went wrong :( ')`)}
      }
    } else if (isInEngAndWales) {
      if (isCore.value) {
        ${insert('...')}
      } else if (isBroader.value) {
        ${insert('...')}
      } else {
        ${insert('...')}
      }
    } else {
       console.error('Something went wrong :( ')
    }
  }`

  //Explain implicit state

  yield * beginSlide('Remove function')
  yield codeRefs.boolsFunction().remove();

  yield * beginSlide('Return to set up');
  yield view.add(codeRefs.boolsSetup())
  yield codeRefs.boolsSetup().selection(DEFAULT, 1)


  yield * beginSlide ('Move code')
  yield codeRefs.boolsSetup().left([-900, 0], 0.5)

  yield * beginSlide ('Highlight scotland core group more info state')
  yield codeRefs.boolsSetup().selection([...lines(0), ...lines(2), ...lines(4)], 0.5)
  yield codeRefs.boolsSetup().edit(0.5, false)`
  const isInScotland = ${edit('false', 'true')};
  const isInEngAndWales = false;
  const isCore = ${edit('false', 'true')};
  const isBroader = false;
  const wantsMoreInfo = ${edit('false', 'true')};
  const wantsLessInfo = false;
  
  let disclaimerObject = {
    text: '',
    bgColor: ''
  }
  `

  const stateStringRef = createRef<Layout>()

      const stateString =
          <Layout layout alignItems={'center'} right={[500, 0]} ref={stateStringRef()}>
            <Rect fill={'#555a73'} padding={40}  radius={20}>
              <Txt fill={'#ffffff'}>Scotland Core Group Long</Txt>
            </Rect>
          </Layout>

  yield view.add(stateString)


  yield * beginSlide ('remove bools setup')
  yield codeRefs.boolsSetup().remove()

  yield * beginSlide ('enum setup')
  yield codeRefs.enumsSetup().scale(0.7).left([-900, 0])
  yield view.add(codeBlocks.enumsSetup)

  yield * beginSlide ('enum highlight')
  yield codeRefs.enumsSetup().selection(lines(1), 0.5)

  yield * beginSlide ('Remove state string')
  yield stateString.remove()

  yield * beginSlide ('Expand set up')
  yield codeRefs.enumsSetup().edit(0.5)`
  const state = {
    ScotlandCoreLong: 'ScotlandCoreLong',
    ScotlandCoreShort: 'ScotlandCoreShort',
    ScotlandBroaderLong: 'ScotlandBroaderLong',
    ScotlandBroaderShort: 'ScotlandBroaderShort',
    EngAndWalesCoreLong: 'EngAndWalesCoreLong',
    EngAndWalesCoreShort: 'EngAndWalesCoreShort',
    EngAndWalesBroaderLong: 'EngAndWalesBroaderLong',
    EngAndWalesBroaderShort: 'EngAndWalesBroaderShort'
  }
  ${insert(`
  
  let disclaimerRegion = '',
      disclaimerGroup = '',
      disclaimerLength = '';
    
  let disclaimerObject = {
    text: '',
    bgColor: ''
  };`)}`


  yield * beginSlide('Remove enum set up')
  yield codeRefs.enumsSetup().remove()

  yield * beginSlide('Add select disclaimer code')
  yield codeRefs.enumSelectDisclaimer().scale(0.5).left([-900, 0])
  yield view.add(codeBlocks.enumSelectDisclaimer)

  yield * beginSlide('Add case logic')
  yield codeRefs.enumSelectDisclaimer().edit(1.2)`
  function selectDisclaimer(disclaimer) {
    switch (disclaimer) {
      case state.ScotlandCoreLong:
        ${edit('', `return {
          title: 'Scotland Disclaimer Core',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
          bgColor: 'blue'
        }
        break;`)}
      case state.ScotlandCoreShort:
        ${edit('',`return {
          title: 'Scotland Disclaimer Core',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          bgColor: 'blue'
        }
        break;`)}
      case state.ScotlandBroaderLong:
        ${edit('','...')}
      case state.ScotlandBroaderShort:
        ${edit('','...')}
      case state.EngAndWalesCoreLong:
        ${edit('','...')}
      case state.EngAndWalesCoreShort:
        ${edit('','...')}
      case state.EngAndWalesBroaderLong:
        ${edit('','...')}
      case state.EngAndWalesBroaderShort:
        ${edit('','...')}
      default:
        return null
  }`
  yield codeRefs.enumSelectDisclaimer().left([-900,0], 1.2)

  yield * beginSlide('Bring back enum value')
  yield codeRefs.enumsSetup().right([950, 400])
  yield codeRefs.enumsSetup().selection(DEFAULT)
  yield view.add(codeBlocks.enumsSetup)

  yield * beginSlide('Highlight case and enum value')
  yield codeRefs.enumsSetup().selection(range(1,19, 1, 38), 0.5)
  yield codeRefs.enumSelectDisclaimer().selection([...range(0,26, 0, 36), ...range(1,10, 1, 20)], 0.5)


  yield * beginSlide('Highlight case logic')
  yield codeRefs.enumSelectDisclaimer().selection(range(2, 0, 8, 30))
  yield codeRefs.enumsSetup().selection(range(1,2, 1, 18), 0.5)

  yield * beginSlide('Introduce update logic')
  yield codeRefs.enumsSetup().remove()
  yield view.add(codeBlocks.enumsUpdateLogic)

  yield * beginSlide('Highlight disclaimer name')
  const disclaimerNameRef = createRef<CodeBlock>()
  const disclaimerName = <Layout layout alignItems={'center'} right={[600, -300]}>
    <Rect fill={'#2c303f'} padding={50} radius={20} scale={0.6}>
      <CodeBlock
          language="js"
          ref={disclaimerNameRef}
          code={`
let disclaimerRegion = '',
    disclaimerGroup = '',
    disclaimerLength = '';`}
      />
    </Rect>
  </Layout>

  yield view.add(disclaimerName)
  yield codeRefs.enumsUpdateLogic().selection([
  ...range(1, 8, 1, 100),
      ...range(3, 51,3, 65 )
  ])

  yield * beginSlide('Update disclaimer name')
  yield disclaimerNameRef().edit(0.5)`
  let disclaimerRegion = '${edit('','Scotland')}',
      disclaimerGroup = '${edit('','Core')}',
      disclaimerLength = '${edit('','Long')}';
      ${insert(`// 'ScotlandCoreLong'`)}`
  yield codeRefs.enumSelectDisclaimer().selection(lines(2))

  yield * beginSlide('Return enum')
  yield codeRefs.enumSelectDisclaimer().remove()
  yield codeBlocks.enumsUpdateLogic.remove()
  yield codeRefs.enumsSetup().selection(DEFAULT, 0)
  yield codeRefs.enumsSetup().edit(0, false)`
  const state = {
    ScotlandCoreLong: 'ScotlandCoreLong',
    ScotlandCoreShort: 'ScotlandCoreShort',
    ScotlandBroaderLong: 'ScotlandBroaderLong',
    ScotlandBroaderhort: 'ScotlandBroaderShort',
    EngAndWalesCoreLong: 'EngAndWalesCoreLong',
    EngAndWalesCoreShort: 'EngAndWalesCoreShort',
    EngAndWalesBroaderLong: 'EngAndWalesBroaderLong',
    EngAndWalesBroaderShort: 'EngAndWalesBroaderShort'
  }`
  yield codeBlocks.enumsSetup.top([0, -200]).scale(0.5)
  yield disclaimerNameRef().edit(0.5)`
  let disclaimerRegion = '${edit('Scotland', '')}',
      disclaimerGroup = '${edit('Core', '')}',
      disclaimerLength = '${edit('Long', '')}';
      // ${edit(`'ScotlandCoreLong'`, '')}`
  yield view.add(codeBlocks.enumsSetup)

  yield * beginSlide('Assign disclaimer objs to enum values')
  yield codeRefs.enumsSetup().edit(1.2, false)`
  const state = {
    ScotlandCoreLong: ${edit(`'ScotlandCoreLong'`, `{
      title: 'Scotland Disclaimer Core',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
      bgColor: 'blue'
    }`)},
    ScotlandCoreShort: ${edit(`'ScotlandCoreShort'`, `{
      title: 'Scotland Disclaimer Core',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      bgColor: 'blue'
    }`)},
    ScotlandBroaderLong: ${edit(`'ScotlandBroaderLong'`, `{
      title: 'Scotland Disclaimer Broader',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
      bgColor: 'blue'
    }`)},
    ScotlandBroaderhort: ${edit(`'ScotlandBroaderShort'`, `{ ... }`)},
    EngAndWalesCoreLong: ${edit(`'EngAndWalesCoreLong'`, `{ ... }`)},
    EngAndWalesCoreShort: ${edit(`'EngAndWalesCoreShort'`, `{ ... }`)},
    EngAndWalesBroaderLong: ${edit(`'EngAndWalesBroaderLong'`, `{ ... }`)},
    EngAndWalesBroaderShort: ${edit(`'EngAndWalesBroaderShort'`, `{ ... }`)}
  }`

  yield * beginSlide('reveal update method')
  yield codeRefs.enumsUpdateLogic().selection(DEFAULT)
  yield view.add(codeBlocks.enumsUpdateLogic)

  yield * beginSlide('Change update method')
  yield codeRefs.enumsUpdateLogic().edit(0.5)`
  function updateDisclaimer() {
    ${edit(`const disclaimerName = disclaimerRegion + disclaimerGroup + disclaimerLength;
  
  Object.assign(disclaimerObject, selectDisclaimer(disclaimerName))
  disclaimerRegion = disclaimerGroup = disclaimerLength = ''`, 'Object.assign(disclaimerObject, disclaimerState[disclaimerName])')}
  }`

  yield * beginSlide('Highlight enum state value')
  yield disclaimerNameRef().edit(0.5)`
  let disclaimerRegion = '${edit('', 'Scotland')}',
      disclaimerGroup = '${edit('', 'Core')}',
      disclaimerLength = '${edit('', 'Long')}';
      // ${edit(``, `'ScotlandCoreLong'`)}`
  yield codeRefs.enumsSetup().selection(range(1, 2, 1, 18))
  yield codeRefs.enumsUpdateLogic().edit(0.5)`
  function updateDisclaimer(${edit('','disclaimerName')}) {
    Object.assign(disclaimerObject, disclaimerState[disclaimerName])
  }`

  yield * beginSlide('Highlight arg and index')
  yield codeRefs.enumsUpdateLogic().selection([...range(1, 50, 1, 64), ...range(0, 26, 0, 40)])

  yield * beginSlide('Clear view')
  yield codeBlocks.enumsUpdateLogic.remove()
  yield codeBlocks.enumsSetup.remove()
  yield disclaimerName.remove()

  yield * beginSlide('Reveal selection state enum')
  yield view.add(codeBlocks.enumSelectionState)

  yield * beginSlide('Reveal selection state function')
  yield codeBlocks.enumSelectionState.scale(0.5, 0.5)
  yield codeBlocks.enumSelectionFunction.scale(0.5)
  yield codeBlocks.enumSelectionState.top(-500, 0.5)
  yield view.add(codeBlocks.enumSelectionFunction)

  yield * beginSlide('Add selection function case logic');
  yield codeRefs.enumSelectionFunction().edit(1.2)`
  let currentState = 'selectingRegion';
  
  function selectOption(value) {
    switch (currentState) {
      case state.SELECTING_REGION:
        ${edit(``,`
        disclaimerRegion = value;
        currentState = 'selectingGroup';
        break;`)}
      case state.SELECTING_GROUP:
        ${edit(``,`
        disclaimerGroup = value;
        currentState = 'selectingLength';
        break;`)}
      case state.SELECTING_LENGTH:
        ${edit(``,`
        disclaimerLength = value;
        currentState = 'selectingRegion';
        break;`)}
      default:
        ${edit(``,`
        disclaimerRegion = disclaimerGroup = disclaimerLength = null;
        currentState = 'selectingRegion';
        break;`)}
    }
  }`

  yield * beginSlide('Finish up selection function');
  yield codeBlocks.enumSelectionFunction.top([0, -280], 1.2);
  yield codeRefs.enumSelectionFunction().edit(1.2)`
  let currentState = 'selectingRegion';
  
  function selectOption(value) {
    switch (currentState) {
      case state.SELECTING_REGION:
        disclaimerRegion = value;
        currentState = 'selectingGroup';
        break;
      case state.SELECTING_GROUP:
        disclaimerGroup = value;
        currentState = 'selectingLength';
        break;
      case state.SELECTING_LENGTH:
        disclaimerLength = value;
        currentState = 'selectingRegion';
        break;
      default:
        disclaimerRegion = disclaimerGroup = disclaimerLength = null;
        currentState = 'selectingRegion';
        break;
    }
    ${edit(``, `
    
    const disclaimerName = disclaimerRegion + disclaimerGroup + disclaimerLength;

    if (disclaimerRegion && disclaimerGroup && disclaimerLength) {
      updateDisclaimer(disclaimerName);
    }`)}
  }`

  yield * beginSlide('Show calling updateDisclaimer from new function');
  yield codeBlocks.enumsUpdateLogic.top([0, -200])
  yield codeRefs.enumsUpdateLogic().selection(DEFAULT)
  yield view.add(codeBlocks.enumsUpdateLogic)
  yield codeRefs.enumSelectionFunction().selection(lines(25))

  yield * beginSlide('clear away enum stuff');
  yield codeBlocks.enumsUpdateLogic.remove()
  yield codeBlocks.enumSelectionState.remove()

  yield * beginSlide('Update setup')
  const stateMachineValuesRef = createRef<CodeBlock>()
  const stateMachineValues = <Layout layout alignItems={'center'} right={[600, -300]}>
    <Rect fill={'#2c303f'} padding={50} radius={20} scale={0.6}>
      <CodeBlock
          language="js"
          ref={stateMachineValuesRef}
          code={`
    currentState: 'SELECTING_REGION',
    disclaimerName: {
      region: null,
      group: null,
      length: null
    },
    disclaimer: {},
    disclaimersEnum: { ... }`}
      />
    </Rect>
  </Layout>
  yield view.add(stateMachineValues)
  yield codeBlocks.enumSelectionFunction.left([-1000, 0])
  yield codeRefs.enumSelectionFunction().edit(1.2)`
  ${edit(`let currentState = 'selectingRegion';`,`
  `)}
  function ${edit(`selectOption`,`transitionToNextState`)}(${edit(``,`event, `)}value) {
    switch (${edit(``,`this.`)}currentState) {
      case ${edit(`state.SELECTING_REGION`, `'SELECTING_REGION'`)}:
        ${edit(`
        disclaimerRegion = value;
        currentState = 'selectingGroup';
        break;`, ``)}
      case ${edit(`state.SELECTING_GROUP`, `'SELECTING_GROUP'`)}:
      ${edit(`
        disclaimerGroup = value;
        currentState = 'selectingLength';
        break;`, ``)}
      case ${edit(`state.SELECTING_LENGTH`, `'SELECTING_LENGTH'`)}:
      ${edit(`
        disclaimerLength = value;
        currentState = 'selectingRegion';
        break;`, ``)}
      default:
       ${edit(`
        disclaimerRegion = disclaimerGroup = disclaimerLength = null;
        currentState = 'selectingRegion';
        break;`, ``)}
    }
    ${edit(`
    const disclaimerName = disclaimerRegion + disclaimerGroup + disclaimerLength;

    if (disclaimerRegion && disclaimerGroup && disclaimerLength) {
      updateDisclaimer(disclaimerName);
    }`, ``)}
  }`

  yield * beginSlide('Define possible transition 1 for states')
  yield codeRefs.enumSelectionFunction().edit(0.5)`
  function transitionToNextState(event, value) {
    switch (this.currentState) {
      case 'SELECTING_REGION':
        ${edit(``, `
        if (event === 'SELECTED_REGION') { ... }
        
        break;`)}
      case 'SELECTING_GROUP':

      case 'SELECTING_LENGTH':

      default:
       
    }
  }`

  yield * beginSlide('Define possible transition 2 for states')
  yield codeRefs.enumSelectionFunction().edit(0.5)`
  function transitionToNextState(event, value) {
    switch (this.currentState) {
      case 'SELECTING_REGION':
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      case 'SELECTING_GROUP':
        ${edit(``, `
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;`)}
      case 'SELECTING_LENGTH':

      default:
       
    }
  }`

  yield * beginSlide('Define possible transition 3 for states')
  yield codeRefs.enumSelectionFunction().edit(0.5)`
  function transitionToNextState(event, value) {
    switch (this.currentState) {
      case 'SELECTING_REGION':
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      case 'SELECTING_GROUP':
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      case 'SELECTING_LENGTH':
        ${edit(``, `
        if (event === 'SELECTED_LENGTH') { ... }
        
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;`)}
      default:
       
    }
  }`

  yield * beginSlide('Define transition logic selected_region')
  yield codeRefs.enumSelectionFunction().edit(0.5)`
  function transitionToNextState(event, value) {
    switch (this.currentState) {
      case 'SELECTING_REGION':
        if (event === 'SELECTED_REGION') { ${edit(`... }`, `
          this.currentState = 'SELECTING_GROUP';
          this.disclaimerName.region = value;
        }`)} 
        
        break;
      case 'SELECTING_GROUP':
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      case 'SELECTING_LENGTH':
        if (event === 'SELECTED_LENGTH') { ... }
        
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      default:
       
    }
  }`

  yield * beginSlide('Define transition logic selected_region event for selecting_group')
  yield codeRefs.enumSelectionFunction().edit(0.5)`
  function transitionToNextState(event, value) {
    switch (this.currentState) {
      case 'SELECTING_REGION':
        if (event === 'SELECTED_REGION') { 
          this.currentState = 'SELECTING_GROUP';
          this.disclaimerName.region = value;
        }
        
        break;
      case 'SELECTING_GROUP':
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ${edit(`...}`, `
          this.currentState = 'SELECTING_REGION';
          this.disclaimerName.group = null;
          this.transitionToNextState('SELECTED_REGION', value)
        }`)} 
        
        break;
      case 'SELECTING_LENGTH':
        if (event === 'SELECTED_LENGTH') { ... }
        
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      default:
       
    }
  }`

  yield * beginSlide('Define transition logic selected_length event for selecting_group')
  yield codeBlocks.enumSelectionFunction.left([-600, 0])
  yield codeRefs.enumSelectionFunction().edit(0.5)`
  function transitionToNextState(event, value) {
    switch (this.currentState) {
      case 'SELECTING_REGION':
        if (event === 'SELECTED_REGION') { 
          this.currentState = 'SELECTING_GROUP';
          this.disclaimerName.region = value;
        }
        
        break;
      case 'SELECTING_GROUP':
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') {
          this.currentState = 'SELECTING_REGION';
          this.disclaimerName.group = null;
          this.transitionToNextState('SELECTED_REGION', value)
        }
        
        break;
      case 'SELECTING_LENGTH':
        if (event === 'SELECTED_LENGTH') { ${edit(`... }`,`
          this.disclaimerName.length = value;
          this.disclaimer = this.disclaimers[Object.values(this.disclaimerName).join('')]();
        }`)}
        
        if (event === 'SELECTED_GROUP') { ... }
        
        if (event === 'SELECTED_REGION') { ... }
        
        break;
      default:
       
    }
  }`

  yield * beginSlide('End');


  yield * beginSlide('End2');

});
