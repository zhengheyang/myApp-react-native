import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	ListView,
	TouchableNativeFeedback
} from "react-native";
import GlobalStyles from "../../components/GlobalStyles";

export default class DoctorList extends Component {
	static navigationOptions = {
		title: "爱尔诊所后宰门诊室",
		tabBarVisible: false
	};

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows([])
		};
	}

	componentDidMount() {
		this._refreshData();
	}

	_refreshData() {
		const { hospitalId, specialityData } = this.props.navigation.state.params;
		setTimeout(() => {
			fetch(
				`http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/speciality\_of\_hospital.json?speciality_id=${specialityData.id}&hospital_id=${hospitalId}&token=${global
					.userInfo.token}`,
				{
					method: "GET"
				}
			)
				.then(response => {
					return response.json();
				})
				.then(responseJson => {
					this._data = responseJson.result;
					console.log(this._data);
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this._data),
						isRefreshing: false
					});
				})
				.catch(function(error) {
					console.log(error);
				});
		}, 0);
	}

	_renderSeparator() {
		return <View style={GlobalStyles.separator} />;
	}

	_onRowPress(index, data) {
		console.log(index);
		const navigation = this.props.navigation;
		navigation.navigate("DoctorDetails", { data });
	}
	_renderRow(rowData, sectionID, rowID) {
		return (
			<TouchableNativeFeedback
				onPress={() => {
					this._onRowPress(rowID, rowData);
				}}
			>
				<View style={styles.docList}>
					<View style={styles.imgBox}>
						<Image
							style={styles.doctorImg}
							source={{ uri: rowData.head_url }}
						/>
					</View>
					<View style={styles.doctorContent}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 10,
								color: "#444444"
							}}
						>
							{rowData.name}
						</Text>
						<Text style={{ fontSize: 13, marginBottom: 10, color: "#444444" }}>
							{rowData.hospital_name}
						</Text>
						<Text style={{ fontSize: 12, color: "#707070" }}>
							{rowData.introducation}
						</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		return (
			<View style={GlobalStyles.container}>
				<ScrollView>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						renderSeparator={this._renderSeparator.bind(this)}
						enableEmptySections
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	docList: {
		backgroundColor: "#fff",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 15,
		paddingTop: 18,
		paddingBottom: 20
	},
	imgBox: {
		flex: 1
	},
	doctorImg: {
		width: 65,
		height: 65,
		resizeMode: "contain"
	},
	doctorContent: {
		flex: 3,
		paddingRight: 15,
		paddingLeft: 20
	}
});
