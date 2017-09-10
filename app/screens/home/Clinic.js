import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	ScrollView,
	ListView,
	TouchableNativeFeedback
} from "react-native";
import GlobalStyles from "../../components/GlobalStyles";

export default class Clinic extends Component {
	static navigationOptions = {
		title: "爱尔诊所",
		tabBarVisible: false
	};

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds
		};

		this._data = [];
	}

	componentDidMount() {
		this._refreshData();
	}

	_refreshData() {
		this.setState({
			isRefreshing: true
		});

		setTimeout(() => {
			fetch(
				`http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/all.json?token=${global
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

	_loadMoreData() {
		if (this._data.length == 0) {
			return;
		}

		this.setState({
			isLoadingMore: true
		});

		setTimeout(() => {
			fetch(
				`http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/all.json?token=${global
					.userInfo.token}`,
				{
					method: "GET"
				}
			)
				.then(response => {
					return response.json();
				})
				.then(responseJson => {
					this._data = this._data.concat(responseJson.result);
					console.log(this._data);

					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this._data),
						isLoadingMore: false
					});
				})
				.catch(function(error) {
					console.log(error);
				});
		}, 0);
	}

	_onRefresh() {
		this._refreshData();
	}

	_renderSeparator() {
		return <View style={GlobalStyles.separator} />;
	}
	_onRowPress(index) {
		console.log(index);
		const navigation = this.props.navigation;
		navigation.navigate("ClinicRoom", { data: this._data[index] });
	}
	_renderRow(rowData, sectionID, rowID) {
		return (
			<TouchableNativeFeedback
				onPress={() => {
					this._onRowPress(rowID);
				}}
			>
				<View style={styles.clinicDetail}>
					<View style={styles.clinicImgBox}>
						<Image style={styles.clinicImg} source={{ uri: rowData.pic_url }} />
					</View>
					<View style={styles.clinicContent}>
						<View
							style={{
								alignItems: "center",
								flexDirection: "row",
								marginBottom: 10
							}}
						>
							<Text
								style={{
									fontSize: 14,
									fontWeight: "bold",
									marginRight: 8,
									color: "#444444"
								}}
							>
								{rowData.name}
							</Text>
							<Text style={{ fontSize: 10, color: "#707070" }}>
								{rowData.doctor_count}位三甲医生
							</Text>
						</View>
						<View>
							<Text
								style={{
									fontSize: 11,
									marginBottom: 10,
									color: "#fff",
									backgroundColor: "#60bdf8",
									padding: 8,
									width: 52,
									borderRadius: 5
								}}
							>
								{rowData.departments[0].name}
							</Text>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Image
									style={{ width: 16, height: 20, resizeMode: "contain" }}
									source={require("../../img/icon_address.png")}
								/>
								<Text style={{ fontSize: 12, color: "#707070" }}>
									{rowData.address}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		return (
			<View style={GlobalStyles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderRow.bind(this)}
					renderSeparator={this._renderSeparator.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	clinicDetail: {
		backgroundColor: "#fff",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexDirection: "row",
		paddingLeft: 10,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 20
	},
	clinicImgBox: {
		flex: 1
	},
	clinicImg: {
		width: 90,
		height: 90,
		resizeMode: "contain"
	},
	clinicContent: {
		flex: 3,
		paddingRight: 15,
		paddingLeft: 40
	}
});
