import {createstore} from "redux";

import {connect} from 'react-redux'
//import {hashHistory} from 'react-router'

import * as settingsActions from './uploadActions'
//import * as uploadSamplesActions from './ducks/uploadSamples'
import Worker from 'worker-loader!./helpers/sandbox' // eslint-disable-line import/no-webpack-loader-syntax


import Upload from '../components/Upload.jsx'



const mapStateToProps = (state) => {
    return {
        settings: {
            sourceMap: {},
            sourceFormat: null,
            sourceFiles: {}
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settings: {
            onChangeMapping: (map) => {
                dispatch(settingsActions.changeMappingSource(map))
            },
            onChangeFormat: (format) => {
                dispatch(settingsActions.changeSourceFormat(format))
            },
            onChangeFiles: (files) => {
                dispatch(settingsActions.changeSourceFiles(files))
            },
            onProceed: (sourceMap, sourceFormat, sourceFiles) => {
                // create a webworker to handle user code in a "sandboxed" environment
                let worker = Worker();
                worker.postMessage({type: 'map', sourceMap, sourceFormat, sourceFiles})
                worker.onmessage = (e) => {
                    dispatch(settingsActions.initializeSamples(e.data))
                  //  hashHistory.push('/upload/')
                }
            }
        },
        actions: {
            // onUpload: (sourceMap, uploadSamples, user) => {
            //     let worker = Worker()
            //     worker.postMessage({type:'combine', sourceMap, uploadSamples})
            //     worker.onmessage = (e) => {
            //         dispatch(uploadSamplesActions.upload(user.username, user.password, user.usercode, e.data))
            //     }
            }
        }
    }


const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        settings: {
            ...stateProps.settings,
            ...dispatchProps.settings
        },
        actions: {
            ...dispatchProps.actions
        },
        user: stateProps.user,
        ui: stateProps.ui,
        uploadSamples: stateProps.uploadSamples
    }
}

const UploadContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Upload)

export default UploadContainer
