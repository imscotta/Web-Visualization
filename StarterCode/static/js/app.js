

// 1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
d3.json(url).then(data => {
    console.log("got data", data);

    // Select Option
    var input_data = data["names"];
    console.log("got data input", input_data);

    var select = d3.select('#selDataset')
    
    // select.on('change', onChange)
    // .append('select')
    //   .attr('id','selDataset')

    var options = select
    .selectAll('option')
    .data(input_data).enter()
    .append('option')
    .text(function (d) { return d; });

    function onChange() {
        selectValue = d3.select('select').property('value')
    };
}
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

//   * Use `sample_values` as the values for the bar chart.

//   * Use `otu_ids` as the labels for the bar chart.

//   * Use `otu_labels` as the hovertext for the chart.

//   ![bar Chart](Images/hw01.png)

//     var data_2 = [{
//         type: 'bar',
//         x: data['sample_values'][0],
//         y: data['samples']['otu_ids'],
//         text: data['otu_labels'],
//         orientation: 'h'
//     }];
  
//     Plotly.newPlot('bar', data_2);

//     // 3. Create a bubble chart that displays each sample.

//     //   * Use `otu_ids` for the x values.

//     //   * Use `sample_values` for the y values.

//     //   * Use `sample_values` for the marker size.

//     //   * Use `otu_ids` for the marker colors.

//     //   * Use `otu_labels` for the text values.

//     var trace1 = {
//         x: data['otu_ids'],
//         y: data['sample_values'],
//         mode: 'markers',
//         marker: {
//         size: data['sample_values'],
//         color: data['otu_ids'], 
//         }
//     };
    
//     var data = [trace1];
    
//     var layout = {
//         title: 'Marker Size',
//         showlegend: false,
//         height: 600,
//         width: 600
//     };

// }).catch(error => {
//     console.log("error fetching url", url);
// });
  
//   Plotly.newPlot('bubble', data, layout);

// // ![Bubble Chart](Images/bubble_chart.png)

// // 4. Display the sample metadata, i.e., an individual's demographic information.

// print(data['metadata']);

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// ![hw](Images/hw03.png)

// 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

// ![hw](Images/hw02.png)

// 7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file