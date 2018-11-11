var fieldsDict = {


    user_code: {
        message: "(ATOMATIC) SESAR user code"  ,
        userValue: ""  ,
        conversion: null ,
    },


    sample_type: {
        message: "The type of sample which comes from a SESAR controlled list"  ,
        userValue: ""  ,
        conversion: null ,
    },


    name: {
        message: "The Name of the sample."  ,
        userValue: ""  ,
        conversion: null ,
    },


    material: {
        message: "The material of the sample which comes from a SESAR controlled list"  ,
        userValue: ""  ,
        conversion: null ,
    },


    igsn: {
        message: "(AUTOMATIC) The 9-digit IGSN of the sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    parent_igsn: {
        message: "The IGSN of the parent of the current sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    is_private: {
        message: "Value should be 1 for private and 0 or null for public"  ,
        userValue: ""  ,
        conversion: null ,
    },


    publish_date: {
        message: "Date on which sample set to public is available for global search and display YYYY-MM-DD"  ,
        userValue: ""  ,
        conversion: null ,
    },


    classification: {
        message: "Classification"  ,
        userValue: ""  ,
        conversion: null ,
    },


    classification_comment: {
        message: "Comment about classification"  ,
        userValue: ""  ,
        conversion: null ,
    },


    field_name: {
        message: "Taxonomy"  ,
        userValue: ""  ,
        conversion: null ,
    },


    description: {
        message: "Free text to describe features of a sample such as its components"  ,
        userValue: ""  ,
        conversion: null ,
    },


    age_min: {
        message: "Numerical value for the minimum age of a sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    age_max: {
        message: "Numerical value for the maximum age of a sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    age_unit: {
        message: "Unit for the age provided"  ,
        userValue: ""  ,
        conversion: null ,
    },


    geological_age: {
        message: "Age of a sample as described by the stratigraphic era"  ,
        userValue: ""  ,
        conversion: null ,
    },


    geological_unit: {
        message: "A body of rock established as a distinct entity in the classification of Earth's rocks"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collection_method: {
        message: "Method by which the sample was collected"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collection_method_descr: {
        message: "Additional information about the collection Method"  ,
        userValue: ""  ,
        conversion: null ,
    },


    size: {
        message: "Size of the registered object"  ,
        userValue: ""  ,
        conversion: null ,
    },


    size_unit: {
        message: "Unit for the numerical value provided for 'size'"  ,
        userValue: ""  ,
        conversion: null ,
    },


    sample_comment: {
        message: "Any free text comment about the sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    purpose: {
        message: "The purpose for collecting the sample. e.g. paleomagnetism"  ,
        userValue: ""  ,
        conversion: null ,
    },


    latitude: {
        message: "Latitude of the location where the sample was collected. (Start latitude for linear sampling features)"  ,
        userValue: ""  ,
        conversion: null ,
    },


    longitude: {
        message: "Longitude of the location where the sample was collected. (Start longitude for linear sampling features)"  ,
        userValue: ""  ,
        conversion: null ,
    },


    latitude_end: {
        message: "End latitude of the location where the sample was collected (WGS84)"  ,
        userValue: ""  ,
        conversion: null ,
    },


    longitude_end: {
        message: "End longitude of the location where the sample was collected (WGS84)"  ,
        userValue: ""  ,
        conversion: null ,
    },


    elevation: {
        message: "Elevation at which a sample was collected (in meters). Use negative values for depth below sea level"  ,
        userValue: ""  ,
        conversion: null ,
    },


    elevation_end: {
        message: "End elevation at which a sample was collected"  ,
        userValue: ""  ,
        conversion: null ,
    },


    elevation_unit: {
        message: "Unit for the elevation provided. e.g. Meters"  ,
        userValue: ""  ,
        conversion: null ,
    },


    vertical_datum: {
        message: "Surface of zero elevation to which heights of various points are referred e.g. NAVD88"  ,
        userValue: ""  ,
        conversion: null ,
    },


    northing: {
        message: "UTM northing (m): a number between 0 and 10"  ,
        userValue: ""  ,
        conversion: null ,
    },


    easting: {
        message: "UTM easting (m): a number between 0 and 834"  ,
        userValue: ""  ,
        conversion: null ,
    },


    zone: {
        message: "UTM zone"  ,
        userValue: ""  ,
        conversion: null ,
    },


    navigation_type: {
        message: "Navigation type"  ,
        userValue: ""  ,
        conversion: null ,
    },


    primary_location_type: {
        message: "Physiographic feature or type of feture that your sample was collected from"  ,
        userValue: ""  ,
        conversion: null ,
    },


    primary_location_name: {
        message: "Name of physiographic feature or the name of the primary_location_type"  ,
        userValue: ""  ,
        conversion: null ,
    },


    location_description: {
        message: "Free text description of the location_description"  ,
        userValue: ""  ,
        conversion: null ,
    },


    locality: {
        message: "Name of the specific place where your sample was collected. This could be the name of a mine"  ,
        userValue: ""  ,
        conversion: null ,
    },


    locality_description: {
        message: "Additional information about the specific place where your sample was collected"  ,
        userValue: ""  ,
        conversion: null ,
    },


    country: {
        message: "Country where the sample was collected"  ,
        userValue: ""  ,
        conversion: null ,
    },


    privince: {
        message: "State or Province where the sample was collected"  ,
        userValue: ""  ,
        conversion: null ,
    },


    county: {
        message: "County where the sample was collected."  ,
        userValue: ""  ,
        conversion: null ,
    },


    city: {
        message: "City or Township where the sample was collected"  ,
        userValue: ""  ,
        conversion: null ,
    },


    cruise_field_prgrm: {
        message: "Name or identifier of the field program during which the sample was collected."  ,
        userValue: ""  ,
        conversion: null ,
    },


    platform_type: {
        message: "Type of platform for the cruise. Suggested list."  ,
        userValue: ""  ,
        conversion: null ,
    },


    platform_name: {
        message: "Name of platform for cruise"  ,
        userValue: ""  ,
        conversion: null ,
    },


    platform_descr: {
        message: "Description of the platform for the cruise"  ,
        userValue: ""  ,
        conversion: null ,
    },


    launch_platform_name: {
        message: "Name of the launch platform that collected the sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    launch_id: {
        message: "Further identifying information about the launch."  ,
        userValue: ""  ,
        conversion: null ,
    },


    launch_type_name: {
        message: "The type of launch used to collect the sample e.g. 'HOV'"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collector: {
        message: "Name of the person who collected the sample or name of chief scientist for larger field programs"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collector_detail: {
        message: "Institution"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collection_start_date: {
        message: "Date when the sample was collected. The format is YYYY-MM-DDTHH:MM:SSZ"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collection_end_date: {
        message: "Date when the sample collection was finished"  ,
        userValue: ""  ,
        conversion: null ,
    },


    collection_date_precision: {
        message: "Precision to display the collection date and times"  ,
        userValue: ""  ,
        conversion: null ,
    },


    current_archive: {
        message: "Name of institution"  ,
        userValue: ""  ,
        conversion: null ,
    },


    current_archive_contact: {
        message: "Address and/or email of the person who should be contacted for information about the sample"  ,
        userValue: ""  ,
        conversion: null ,
    },


    original_archive: {
        message: "Name of institution"  ,
        userValue: ""  ,
        conversion: null ,
    },


    original_archive_contact: {
        message: "Address and/or email of the person who should be contacted for information about the sample's original archive"  ,
        userValue: ""  ,
        conversion: null ,
    },


    depth_min: {
        message: "Minimum depth at which a sample was collected from its parent core"  ,
        userValue: ""  ,
        conversion: null ,
    },


    depth_max: {
        message: "Maximum depth at which a sample was collected from its parent core"  ,
        userValue: ""  ,
        conversion: null ,
    },


    depth_scale: {
        message: "Unit in which the depth is provided e.g. MBSF"  ,
        userValue: ""  ,
        conversion: null ,
    },


    sample_other_names: {
        message: "Other names for the sample. Can be multiple"  ,
        userValue: ""  ,
        conversion: null ,
    },


}
const CM = "cm";
const MM = "mm";
//
// var testdict = {
//     description: {
//         message: "Free text to describe features of a sample such as its components"  ,
//         userValue: ""  ,
//         conversion: null ,
//     },
//
//     collection_start_date: { //where can i find the sesar api docs???
//         message: "Date when the sample was collected. The format is YYYY-MM-DDTHH:MM:SSZ"  ,
//         userValue: ""  ,
//         conversion: null ,
//     },
//
//     size: {
//         message: "Size of the registered object"  ,
//         userValue: ""  ,
//         conversion: null ,
//         units:[CM,MM],
//         unitsDisplay:<div></div>,
//         selectedUnit:null,
//         unitMessage:"Please select the unit for measurement your institution uses.",
//     },
//
// }
export default fieldsDict;