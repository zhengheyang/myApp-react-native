import React from "react";
import { StackNavigator } from "react-navigation";
import Home from "./Home";
import Clinic from "./Clinic";
import ClinicRoom from "./ClinicRoom";
import DoctorList from "./DoctorList";
import DoctorDetails from "./DoctorDetails";
import DiseaseDescribe from "./DiseaseDescribe";
import Payment from "./Payment";

let HomeScreen = StackNavigator(
	{
		Home: { screen: Home },
		Clinic: { screen: Clinic },
		ClinicRoom: { screen: ClinicRoom },
		DoctorList: { screen: DoctorList },
		DoctorDetails: { screen: DoctorDetails },
		DiseaseDescribe: { screen: DiseaseDescribe },
		Payment: { screen: Payment }
	},
	{
		initialRouteName: "Home",
		navigationOptions: {
			headerStyle: {
				backgroundColor: "#fff",
				height: 44,
				elevation: 1
			},
			headerTitleStyle: {
				fontSize: 16,
				color: "#444",
				fontWeight: "normal"
				// alignSelf: "center"
			}
		}
	}
);

export default HomeScreen;
