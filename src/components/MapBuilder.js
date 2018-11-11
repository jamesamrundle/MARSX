import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import fieldsDict from "./hoc/fieldsDict"
import './css/MapBuilder.css'
import {readFile} from "fs";
import * as d3 from "d3-dsv"

var text = "original_archive,current archive,platform_name,cruise_field_prgrm,name,collection_method,collection_start_date,collection_end_date,latitude,latitude_end,longitude,longitude_end,elevation,elevation_end,size,size_unit CM IS COMMON,,collector,primary_location_type,igsn,,sample_comment,,field_name KEYED LIST,sample description,geological_age,age (min)MA,age (max)MA,sample_comment,classification,sample description,sample_type"

var newtext = text.split(",");


{/*<ul>*/}

    {/*{Object.entries(fieldsDict).map(([field,value]) => (*/}
        {/*<li >*/}
            {/*<h4>{value.message}</h4>*/}
            {/*<input placeholder={field} ></input>*/}

        {/*</li> )*/}
    {/*)}*/}
{/*</ul>*/}



class MapBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = { file:[],fields:{}}

        this.handleFileUpload=this.handleFileUpload.bind(this)
       this.readToCSV=this.readToCSV.bind(this)
        this.renderOptions=this.renderOptions.bind(this)
        this.getIt=this.getIt.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }


   async handleFileUpload(e){
        console.log("e",e)
        this.setState({cat:["whatthefuck"]})
        await this.setState({file:e[0]})
        console.log("state: ",this.state.file)
       //this.readToCSV(this.state.file
           const fileContents = await this.readToText(this.state.file)
           console.log("fc:",fileContents);
        await this.readToCSV(fileContents)
    }

    async readToText(file) {
       // console.log(file);

  //      let cat = "";
        //
        // var reader = new FileReader();
        // reader.onloadend = function (event) {
        //     if (event.target.readyState == FileReader.DONE) {
        //         var data = event.target.result;
        //     }
        //     console.log("data:", data)
        //     cat = data;
        // };
        //
        // reader.readAsText(file)
        // console.log("cat:",cat);

//////////
        const temporaryFileReader = new FileReader();

        return new Promise((resolve, reject) => {
            temporaryFileReader.onerror = () => {
                temporaryFileReader.abort();
                reject(new DOMException("Problem parsing input file."));
            };

            temporaryFileReader.onload = () => {
                resolve(temporaryFileReader.result);
            };
            temporaryFileReader.readAsText(file);
        });

    };


    async readToCSV(file){
       var userFields = d3.csvParse(file)
        console.log("CSV",userFields)
        console.log("cols:",userFields.columns)
        console.log("uf0",userFields[0])
        Object.keys(userFields[0]).map(each=> this.setState({fields:
                {...this.state.fields,
                    [each]:
                        {disabled:false}
                }}))//this.state.fields."each"

    }

    renderOptions() {
        var userFields = Object.keys(this.state.fields)

        if (userFields) {
           return userFields.map(each=> {

               var d = this.state.fields[each].disabled
               console.log("d",d)
               return <option id={each} onClick={this.handleClick} disabled={d}>{each}</option>
           })

        } else return ""
    }

    handleClick = (e) => {
        var x = e.target.id
       console.log("...",this.state.fields[x].disabled)
        var cat = Object.assign({},this.state.fields)

        this.setState(preState => ({
            fields: {
                ...this.state.fields,
                [x]: { disabled: !preState.fields[x].disabled }
            }
        }));

        // !this.state.fields[x].disabled ?
        //     cat[x].disabled = true : cat[x].disabled = false
        //
        //     this.setState({fields:cat})

    }



    getIt= (e)=>{console.log("getit:",e.target.disabled);
    !e.target.disabled ? (e.target.disabled="true"):(e.target.disabled=false);
        this.setState(!this.state.render ? {render: "cat"}:{render:"dog"});
    }//document.getElementById(e.target.id)



    render() {
        return (



            <div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                fileinput
                <input type="file" onChange={event =>   this.handleFileUpload(event.target.files)}></input>

                <div>
                    <span><h3>name</h3>
                    Sample Identifier
                    </span>
                    <select multiple className="form-control" id="sel2" name="sellist2">
                        {this.renderOptions()}
                    </select>
                </div>
                <div>
                    <span><h3>collection_start_date</h3>
                        <select multiple className="form-control" id="sel2" name="sellist2">
                        {this.renderOptions()}
                    </select>
                    </span>
                </div>
                <div>
                    <span><h3>collection_end_date</h3></span>
                </div>
                <div>
                    <span><h3>collection_end_date</h3></span>
                </div>
                <div>
                    <span><h3>sample_description</h3></span>
                </div>
            </div> );

    }
}

 function mapStateToProps(state) {
        return {
            authenticated: state.auth.authenticated,

        };
    }

export default connect(mapStateToProps)(MapBuilder);
