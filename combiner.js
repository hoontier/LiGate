// import majors from './majors.json' assert { type: "json" };
// import collegesData from './collegesAndDepartments.json' assert { type: "json" };

// console.log("Majors Data:", majors);
// console.log("Colleges Data:", collegesData);

// // Create a map of colleges and departments, with majors nested within
// let organizedData = {};

// majors.forEach(major => {
//     // Ensuring we have proper data for college and department
//     if (!major.currentCollege || !major.currentDepartment) {
//         console.warn("Skipping major with missing college or department:", major);
//         return;
//     }
//     if (!organizedData[major.currentCollege]) {
//         organizedData[major.currentCollege] = {};
//     }

//     if (!organizedData[major.currentCollege][major.currentDepartment]) {
//         organizedData[major.currentCollege][major.currentDepartment] = [];
//     }

//     organizedData[major.currentCollege][major.currentDepartment].push(major);
// });

// console.log("Organized Data:", organizedData);

// // Transform the organizedData object into the desired array structure
// let combinedData = {
//     colleges: collegesData.colleges.map(college => {
//         return {
//             name: college.name,
//             departments: college.departments.map(departmentName => {
//                 // Safe check for existence before accessing nested property
//                 let departmentMajors = organizedData[college.name] ? organizedData[college.name][departmentName] || [] : [];
//                 return {
//                     name: departmentName,
//                     majors: departmentMajors
//                 };
//             })
//         };
//     })
// };

// console.log("Combined Data:", combinedData);

// // Optionally, convert combinedData to a JSON string and log it or write it to a file.
// import fs from 'fs/promises';

// try {
//     await fs.writeFile('combinedData.json', JSON.stringify(combinedData, null, 2));
//     console.log("Data written to combinedData.json successfully!");
// } catch (error) {
//     console.error("Error writing to file:", error);
// }
