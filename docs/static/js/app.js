
// 1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
d3.json(url).then(data => {
    console.log("got data", data);

    // Select Option
    var input_data = data["names"];
    console.log("select input", input_data);

    var select = d3.select('#selDataset');
    select.on('change', function() { onChange(data) });

    var options = select
    .selectAll('option')
    .data(input_data).enter()
    .append('option')
    .text(function (d) { return d; });

    onChange(data);

    function onChange(data) {
        var selectValue = d3.select('select').property('value');
        // alert(selectValue);
        console.log("Passed data", data);

        let sampleData = data.samples;
        console.log("Sample data", sampleData);

        let metaData = data.metadata;
        console.log("Meta data", metaData);

        let selectedSampleData = sampleData.filter(sampleData => sampleData.id == selectValue);
        // let result = selectedSampleData[0];
        console.log("Selected Sample data", selectedSampleData);

        // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

        //   * Use `sample_values` as the values for the bar chart.

        //   * Use `otu_ids` as the labels for the bar chart.

        //   * Use `otu_labels` as the hovertext for the chart.

        //   ![bar Chart](Images/hw01.png)

        var bar_data = [{
            type: 'bar',
            x: selectedSampleData[0]['sample_values'],
            y: selectedSampleData[0]['otu_ids'],
            text: selectedSampleData[0]['otu_labels'],
            orientation: 'h'
        }];

        var bar_layout = {
            title: "Sample Data Overview"
          };

        Plotly.newPlot("bar", bar_data, bar_layout);

        // 3. Create a bubble chart that displays each sample.

        //   * Use `otu_ids` for the x values.

        //   * Use `sample_values` for the y values.

        //   * Use `sample_values` for the marker size.

        //   * Use `otu_ids` for the marker colors.

        //   * Use `otu_labels` for the text values.

        var trace1 = {
            x: selectedSampleData[0]['otu_ids'],
            y: selectedSampleData[0]['sample_values'],
            mode: 'markers',
            marker: {
            size: selectedSampleData[0]['sample_values'],
            color: selectedSampleData[0]['otu_ids'], 
            }
        };
        
        var data = [trace1];
        
        var bubble_layout = {
            title: 'Marker Size',
            showlegend: false,
            height: 600,
            width: 600
        };
        
        Plotly.newPlot('bubble', data, bubble_layout);

        // // 4. Display the sample metadata, i.e., an individual's demographic information.

        let selectedMetaData = metaData.filter(metaData => metaData.id == selectValue);
        let result = selectedMetaData[0];
        let age = d3.select("#age");
        age.text(result.age);
        let type = d3.select("#type");
        type.text(result.bbtype);        
        let ethnicity = d3.select("#ethnicity");
        ethnicity.text(result.ethnicity);        
        let gender = d3.select("#gender");
        gender.text(result.gender);    
        let location = d3.select("#location");
        location.text(result.location); 
        let wfreq = d3.select("#freq");
        wfreq.text(result.wfreq); 
        let sample = d3.select("#sample");
        sample.text(result.sample);                          

        console.log("Meta data", selectedMetaData);

        // 5. Display each key-value pair from the metadata JSON object somewhere on the page.

        // ![hw](Images/hw03.png)

        // 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

        // ![hw](Images/hw02.png)

    };

    function demographicInfo() {
        selectValue = d3.select('select').property('value');
        return data["samples"].id = selectValue;
    };
   
});

// 7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file