import DashboardLayout from "../layouts/DashboardLayout";
const instructorRoutes = [
    {
        path: "/instructor",
        element: 
                <DashboardLayout />,
        children: [
            { index: true, element: <>Hello Instructor</> }
        ],
    },
];

export default instructorRoutes;

