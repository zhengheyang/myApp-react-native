import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	ScrollView,
	ListView,
	TouchableNativeFeedback,
	ActivityIndicator,
	RefreshControl
} from "react-native";
import GlobalStyles from "../../components/GlobalStyles";
import Storage from "../../components/DeviceStorage";

export default class HomePage extends Component {
	static navigationOptions = {
		title: "爱尔生活"
	};

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			isRefreshing: false,
			isLoadingMore: false,
			dataSource: ds
		};
	}

	componentWillMount() {
		console.log("home------componentWillMount");
		Storage.get("TOKEN").then(tags => {
			console.log(tags);
			global.userInfo = {
				token: tags
			};
			if (!tags) {
				this.props.navigation.navigate("Login", {});
			} else {
				return;
			}
		});
	}
	_onColumnPress() {
		const navigation = this.props.navigation;
		navigation.navigate("Clinic", {});
	}

	_onRowPress(rowID) {
		console.log(rowID);
		Storage.get("TOKEN").then(tags => {
			console.log(tags);
		});
		Storage.get("ID").then(tags => {
			console.log(tags);
		});
	}

	componentDidMount() {
		this._refreshData();
	}

	render() {
		return (
			<View style={GlobalStyles.container}>
				<ScrollView>
					<View>
						<Image
							style={styles.bannerImg}
							source={require("../../img/pic_home_banner.png")}
						/>
					</View>
					<View style={styles.flexbox}>
						<TouchableNativeFeedback
							style={{ width: "50%" }}
							onPress={() => {
								this._onColumnPress();
							}}
						>
							<View style={styles.flexboxSection}>
								<View>
									<Text style={styles.sectionTitle}>复诊</Text>
									<Text style={styles.sectionContent}>及时复诊预约</Text>
								</View>
								<View>
									<Image
										style={styles.iconImg}
										source={require("../../img/icon_message.png")}
									/>
								</View>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback
							style={{ width: "50%" }}
							onPress={() => {
								this._onColumnPress();
							}}
						>
							<View style={styles.flexboxSection}>
								<View>
									<Text style={styles.sectionTitle}>爱尔诊所</Text>
									<Text style={styles.sectionContent}>名医坐诊</Text>
								</View>
								<View>
									<Image
										style={styles.iconImg}
										source={require("../../img/icon_edit.png")}
									/>
								</View>
							</View>
						</TouchableNativeFeedback>
					</View>

					<View style={styles.flexbox}>
						<TouchableNativeFeedback
							style={{ width: "50%" }}
							onPress={() => {
								this._onColumnPress();
							}}
						>
							<View style={styles.flexboxSection}>
								<View>
									<Text style={styles.sectionTitle}>名医联盟</Text>
									<Text style={styles.sectionContent}>线上咨询</Text>
								</View>
								<View>
									<Image
										style={styles.iconImg}
										source={require("../../img/icon_mingyilianmeng.png")}
									/>
								</View>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback
							style={{ width: "50%" }}
							onPress={() => {
								this._onColumnPress();
							}}
						>
							<View style={styles.flexboxSection}>
								<View>
									<Text style={styles.sectionTitle}>商户联盟</Text>
									<Text style={styles.sectionContent}>信赖商户</Text>
								</View>
								<View>
									<Image
										style={styles.iconImg}
										source={require("../../img/icon_major.png")}
									/>
								</View>
							</View>
						</TouchableNativeFeedback>
					</View>
					<View style={styles.doctorView}>
						<Text style={styles.doctorTitle}>名医联盟推荐医生</Text>
					</View>
					{this.state.isRefreshing === true ? (
						<ActivityIndicator />
					) : (
						<ListView
							dataSource={this.state.dataSource}
							renderRow={this._renderRow.bind(this)}
							renderSeparator={this._renderSeparator.bind(this)}
							refreshControl={
								<RefreshControl
									refreshing={this.state.isRefreshing}
									onRefresh={this._onRefresh.bind(this)}
									title="加载中..."
								/>
							}
							//onEndReached={this._onEndReached.bind(this)}
							renderFooter={this._onRenderFooter.bind(this)}
						/>
					)}
				</ScrollView>
			</View>
		);
	}
	_refreshData() {
		this.setState({
			isRefreshing: true
		});

		setTimeout(() => {
			fetch(
				"http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/recommend.json?token=e7168ad103b0b443f737670d65bbfc26",
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
				"http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/recommend.json?token=e7168ad103b0b443f737670d65bbfc26",
				{
					method: "GET"
				}
			)
				.then(response => {
					return response.json();
				})
				.then(responseJson => {
					this._data = this._data.concat(responseJson.result);

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

	// _onEndReached() {
	//   this._loadMoreData();
	// }

	_renderSeparator() {
		return <View style={GlobalStyles.separator} />;
	}
	_onRenderFooter() {
		if (this.state.isRefreshing === false) {
			return <Text>已经到底啦！</Text>;
		} else {
			return <View />;
		}
	}

	_renderRow(rowData, rowID, sectionID) {
		return (
			<TouchableNativeFeedback
				onPress={() => {
					this._onRowPress(rowID);
				}}
			>
				<View style={styles.doctorDetail}>
					<View style={styles.doctorImgBox}>
						<Image
							style={styles.doctorImg}
							source={{ uri: rowData.head_url }}
						/>
					</View>
					<View style={styles.doctorContent}>
						<View
							style={{
								alignItems: "flex-start",
								flexDirection: "row",
								marginBottom: 10
							}}
						>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "bold",
									marginRight: 25,
									color: "#444444"
								}}
							>
								{rowData.name}
							</Text>
							<Text style={{ fontSize: 13, color: "#707070" }}>
								{rowData.hospital_department_name + rowData.job_title}
							</Text>
						</View>
						<View>
							<Text
								style={{ fontSize: 13, marginBottom: 10, color: "#444444" }}
							>
								{rowData.hospital_name}
							</Text>
							<Text style={{ fontSize: 12, color: "#707070" }}>
								{rowData.introducation}
							</Text>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	bannerImg: {
		width: Dimensions.get("window").width,
		height: 160,
		resizeMode: "stretch"
	},
	flexbox: {
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexDirection: "row",
		backgroundColor: "#f0f0f0"
	},
	flexboxSection: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		height: 70,
		margin: 1,
		backgroundColor: "#ffffff",
		padding: 16,
		paddingRight: 20
	},
	iconImg: {
		width: 38,
		resizeMode: "contain"
	},
	sectionTitle: {
		fontSize: 16,
		color: "#444444",
		fontWeight: "bold",
		marginBottom: 5
	},
	sectionContent: {
		fontSize: 12,
		color: "#888888"
	},
	doctorView: {
		backgroundColor: "#ffffff",
		height: 55,
		paddingLeft: 16,
		justifyContent: "center",
		marginTop: 16,
		marginBottom: 1
	},
	doctorTitle: {
		fontSize: 14,
		color: "#444444"
	},
	doctorDetail: {
		backgroundColor: "#fff",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexDirection: "row",
		height: 144,
		paddingLeft: 10,
		paddingTop: 10,
		paddingRight: 10
	},
	doctorImgBox: {
		flex: 1
	},
	doctorImg: {
		width: 90,
		height: 90,
		resizeMode: "contain"
	},
	doctorContent: {
		flex: 3,
		paddingRight: 15,
		paddingLeft: 40
	}
});
