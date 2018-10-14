import {Map} from 'immutable'

// Actions
const CHANGE_MAPPING_SOURCE = 'mars/upload/CHANGE_SOURCE_MAPPING'
const CHANGE_SOURCE_FORMAT = 'mars/upload/CHANGE_SOURCE_FORMAT'
const CHANGE_SOURCE_FILES = 'mars/upload/CHANGE_SOURCE_FILES'
const INITIALIZE_SAMPLES = 'mars/upload/INITIALIZE_SAMPLES'

// Initial state
const INITIAL_STATE = Map({})

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CHANGE_MAPPING_SOURCE:
            console.log("mapping",action.sourceMap)
            return state.set('sourceMap', action.sourceMap) //technically shouldn't be in state b/c not serializable
        case CHANGE_SOURCE_FORMAT:
            return state.set('sourceFormat', action.sourceFormat)
        case CHANGE_SOURCE_FILES:
            return state.set('sourceFiles', action.sourceFiles)
        default:
            return state
    }
}

// Action Creators

export function initializeSamples(sampleArray) { //pasted from uploadSamples in OG mars
    return {
        type: INITIALIZE_SAMPLES,
        sampleArray
    }
}

export function changeMappingSource(sourceMap) {
    return {
        type: CHANGE_MAPPING_SOURCE,
        sourceMap
    }
}

export function changeSourceFormat(sourceFormat) {
    return {
        type: CHANGE_SOURCE_FORMAT,
        sourceFormat
    }
}

export function changeSourceFiles(sourceFiles) {
    return {
        type: CHANGE_SOURCE_FILES,
        sourceFiles
    }
}
