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

export default class ClinicRoom extends Component {
	static navigationOptions = {
		title: "诊室",
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
		this.setState({
			isRefreshing: true
		});

		setTimeout(() => {
			fetch(
				`http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/show.json?hospital_id=${this
					.props.navigation.state.params.data.id}&token=${global.userInfo
					.token}`,
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
						dataSource: this.state.dataSource.cloneWithRows(
							this._data.specialities
						),
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
				`http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/show.json?hospital_id=${this
					.props.navigation.state.params.data.id}&token=${global.userInfo
					.token}`,
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
						dataSource: this.state.dataSource.cloneWithRows(
							this._data.specialities
						),
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

	_onRowPress(index, data) {
		console.log(index);
		const navigation = this.props.navigation;
		navigation.navigate("DoctorList", {
			hospitalId: this._data.id,
			specialityData: data
		});
	}
	_renderRow(rowData, sectionID, rowID) {
		return (
			<TouchableNativeFeedback
				onPress={() => {
					this._onRowPress(rowID, rowData);
				}}
			>
				<View style={styles.depList}>
					<View style={{ flex: 5 }}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Text style={{ fontSize: 16, color: "#000" }}>
								{rowData.name}
							</Text>
							<Text style={{ fontSize: 12 }}>{rowData.doctor_count} 位三甲医生</Text>
						</View>
						<View>
							<Text style={{ marginTop: 15 }}>{rowData.description}</Text>
						</View>
					</View>
					<View style={{ flex: 1 }}>
						<Image
							style={{
								height: 16,
								resizeMode: "contain"
							}}
							source={require("../../img/icon_common_rightarrow.png")}
						/>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		const { address, name, phone } = this.props.navigation.state.params.data;

		return (
			<View style={GlobalStyles.container}>
				<ScrollView>
					<View style={{ backgroundColor: "#ffffff" }}>
						<View>
							<Image
								style={styles.bannerImg}
								source={require("../../img/pic_home_banner.png")}
							/>
						</View>
						<View style={styles.clinicIntro}>
							<Text
								style={{ fontSize: 16, color: "#444444", marginBottom: 17 }}
							>
								{name}
							</Text>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Image
									style={{
										width: 15,
										height: 15,
										resizeMode: "contain",
										marginRight: 8
									}}
									source={require("../../img/icon_right_blue.png")}
								/>
								<Text
									style={{ fontSize: 12, color: "#707070", marginRight: 16 }}
								>
									三甲名医出诊
								</Text>
								<Image
									style={{
										width: 15,
										height: 15,
										resizeMode: "contain",
										marginRight: 8
									}}
									source={require("../../img/icon_right_blue.png")}
								/>
								<Text
									style={{ fontSize: 12, color: "#707070", marginRight: 16 }}
								>
									无过度医疗
								</Text>
							</View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Image
									style={{
										width: 18,
										height: 20,
										resizeMode: "contain",
										marginRight: 10
									}}
									source={require("../../img/icon_address.png")}
								/>
								<Text
									style={{
										fontSize: 12,
										color: "#707070",
										marginTop: 25,
										marginBottom: 25
									}}
								>
									{address}
								</Text>
							</View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Image
									style={{
										width: 18,
										height: 20,
										resizeMode: "contain",
										marginRight: 10
									}}
									source={require("../../img/icon_phone.png")}
								/>
								<Text style={{ fontSize: 12, color: "#0000ee" }}>{phone}</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							backgroundColor: "#fff",
							marginTop: 12,
							flexDirection: "row",
							paddingLeft: 15,
							paddingTop: 12,
							paddingBottom: 12,
							alignItems: "center",
							marginBottom: 1
						}}
					>
						<Text>科室</Text>
						<Text style={{ fontSize: 12, color: "#96d4fa" }}>
							（点击科室选择医生进行门诊预约）
						</Text>
					</View>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						renderSeparator={this._renderSeparator.bind(this)}
					/>
					<View
						style={{
							backgroundColor: "#fff",
							marginTop: 12,
							paddingLeft: 15,
							paddingTop: 12,
							paddingBottom: 12,
							marginBottom: 1
						}}
					>
						<Text style={{ fontSize: 14, color: "#444" }}>诊所介绍</Text>
					</View>
					<View
						style={{
							backgroundColor: "#fff",
							paddingLeft: 15,
							paddingTop: 12,
							paddingBottom: 25
						}}
					>
						<Text style={{ fontSize: 14 }}>
							爱尔诊所是爱尔生活集团旗下，高品质专业口腔诊所。诊所坐诊专家团队均有本地三甲医院主任及副主任医师组成。爱尔诊所可为患者提供线上与线下专业诊疗方案。
						</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bannerImg: {
		width: Dimensions.get("window").width,
		height: 188,
		resizeMode: "stretch"
	},
	clinicIntro: {
		paddingTop: 22,
		paddingLeft: 15,
		paddingBottom: 17
	},
	depList: {
		backgroundColor: "#ffffff",
		paddingLeft: 15,
		paddingTop: 18,
		paddingBottom: 20,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center"
	}
});
