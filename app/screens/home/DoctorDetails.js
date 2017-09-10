//医生详情页面
import React, { Component } from "react";
import ScrollableTabView, {
	DefaultTabBar
} from "react-native-scrollable-tab-view";

import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	ListView,
	TouchableNativeFeedback
} from "react-native";
export default class DoctorDetails extends Component {
	static navigationOptions = {
		title: "医生详情",
		tabBarVisible: false
	};

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dateData: [],
			currentDateIndex: 0
		};
	}

	componentDidMount() {
		this._refreshData();
	}

	_refreshData() {
		console.log(this.props.navigation.state.params.data);
		const { id } = this.props.navigation.state.params.data;
		setTimeout(() => {
			fetch(
				`http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/show.json?doctor_id=${id}&token=${global
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
					fetch(
						`http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/available_appointment.json?address_id=${this
							._data.addresses[0].id}&doctor_id=${this._data.id}&token=${global
							.userInfo.token}`,
						{
							method: "GET"
						}
					)
						.then(response => {
							return response.json();
						})
						.then(responseJson => {
							this.setState({
								dateData: responseJson.result
							});
							console.log(responseJson.result);
						})
						.catch(function(error) {
							console.log(error);
						});
				})
				.catch(function(error) {
					console.log(error);
				});
		}, 0);
	}

	_toDiseaseDescribe() {
		const navigation = this.props.navigation;
		navigation.navigate("DiseaseDescribe", {});
	}

	render() {
		const {
			name,
			job_tilte,
			hospital_name,
			hospital_department_name
		} = this.props.navigation.state.params.data;
		return (
			<View style={styles.container}>
				{/*<ScrollView style={{backgroundColor:'green'}} showsVerticalScrollIndicator={false}>*/}

				<View style={styles.doctorDate}>
					<View style={styles.imgBox}>
						<Image
							style={styles.doctorImg}
							source={require("../../img/head.jpg")}
						/>
					</View>
					<View style={styles.DoctorInfo}>
						<Text style={styles.doctorName}>{name}</Text>
						<Text style={styles.doctorAffiliation}>{hospital_name}</Text>
						<Text style={styles.doctorAffiliationRoom}>
							<Text style={styles.officeRoom}>
								{hospital_department_name}
							</Text>{" "}
							{job_tilte}
						</Text>
					</View>
				</View>
				<ScrollableTabView
					tabBarActiveTextColor="#09a9ef"
					tabBarBackgroundColor="#fff"
					renderTabBar={() => <DefaultTabBar />}
				>
					<View tabLabel="预约">
						<ScrollView>
							<View style={styles.contentBOX}>
								<View style={styles.topSiteBOx}>
									<Text style={styles.topSiteBOxTxt}>爱尔后门 陕西省西安市未央区</Text>
								</View>
								<View style={styles.choiceTime}>
									<Text style={styles.choiceTimeTitle}>日期选择</Text>
									<ScrollView
										horizontal={true}
										showsHorizontalScrollIndicator={false}
										style={styles.choiceDate}
									>
										<View style={styles.choiceDateItem}>
											<View style={styles.choiceDateItemDayBox}>
												<Text style={styles.choiceDateItemDay}>日</Text>
												<Text style={styles.choiceDateItemDay}>期</Text>
											</View>
											<Text style={styles.choiceDateItemListAM}>上午</Text>
											<Text style={styles.choiceDateItemListPM}>下午</Text>
										</View>
										{this.state.dateData.map((item, index) => (
											<DateItem
												{...item}
												index={index}
												onPress={() => {
													this.setState(
														{
															currentDateIndex: index
														},
														() => {
															console.log(this.state.currentDateIndex);
														}
													);
												}}
											/>
										))}
									</ScrollView>

									<View style={styles.choiceAM}>
										<Text style={styles.choiceTimeTitle}>选择上午时间</Text>
										<TimeSelector
											currentData={
												this.state.dateData[this.state.currentDateIndex]
											}
											onPress={() => {}}
										/>
									</View>
									<View style={styles.choicePM}>
										<Text style={styles.choiceTimeTitle}>选择下午时间</Text>
										<View style={styles.choiceTimeBox}>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
										</View>
										<View style={styles.choiceTimeBox}>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
											<View style={styles.choiceTimeList}>
												<Text style={styles.Time}>08:00</Text>
												<Text style={styles.ticket}>不可预约</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
						</ScrollView>
					</View>
					<View tabLabel="资料" />
				</ScrollableTabView>
				<View style={styles.tabsCon}>
					<View style={styles.tabsConLeft}>
						<View style={styles.tabsConLeftInfo}>
							<Text>加急预约</Text>
							<Text>提前预约享受更多优惠</Text>
						</View>
						<View style={styles.tabsConLeftMoney}>
							<Text style={styles.tabsConLeftMoneyOriginal}>200</Text>
							<Text style={styles.tabsConLeftMoneyNow}>0.1</Text>
						</View>
					</View>
					<TouchableNativeFeedback
						onPress={() => {
							this._toDiseaseDescribe();
						}}
					>
						<View style={styles.tabsConRight}>
							<Text style={styles.subChoice}>提交预约</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		);
	}
}
<DateItem date="asdfsdf" />;

const DateItem = ({ date, am, pm, onPress, index, currentIndex }) => {
	return (
		<TouchableNativeFeedback onPress={onPress}>
			<View
				style={
					index === currentIndex ? (
						styles.choiceDateItemActive
					) : (
						styles.choiceDateItem
					)
				}
			>
				<View style={styles.choiceDateItemDayBox}>
					<Text style={styles.choiceDateItemDay}>{date}</Text>
					<Text style={styles.choiceDateItemDay}>期</Text>
				</View>
				<Text style={styles.choiceDateItemListAM}>{am && "坐诊"}</Text>
				<Text style={styles.choiceDateItemListPM}>{pm && "坐诊"}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const TimeSelector = props => {
	const { currentData, onPress } = props;
	return (
		<View style={styles.choiceTimeBox}>
			{currentData.am_times.map(item => {
				return (
					<View style={styles.choiceTimeList}>
						<Text style={styles.Time}>{item.time}</Text>
						<Text style={styles.ticket}>
							{item.count > 0 ? item.count : "不可预约"}
						</Text>
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0"
	},
	doctorDate: {
		height: 120,
		flexDirection: "row",
		alignItems: "flex-start",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#dddddd",
		backgroundColor: "#fff"
	},
	imgBox: {
		flex: 3,
		padding: 10
	},
	doctorImg: {
		width: "100%",
		height: 100
	},
	DoctorInfo: {
		flex: 8,
		height: "auto"
	},
	doctorName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#444444",
		paddingTop: 12,
		paddingBottom: 6
	},
	doctorAffiliation: {
		fontSize: 15,
		color: "#444444",
		fontWeight: "bold"
	},
	doctorAffiliationRoom: {
		fontSize: 15,
		paddingTop: 6,
		color: "#737373"
	},
	officeRoom: {
		color: "#000"
	},
	subscribeBox: {
		flex: 5,
		textAlign: "center"
		// backgroundColor:'green'
	},
	subscribeInfoBox: {
		flex: 5,
		textAlign: "center"
		// backgroundColor:'green',
	},
	contentBOX: {
		// flex: 1,
		// backgroundColor:'yellow'
	},
	topSiteBOx: {
		backgroundColor: "#fff",
		padding: 10,
		marginBottom: 15
	},
	topSiteBOxTxt: {
		fontSize: 14,
		color: "#444444"
	},
	choiceTime: {
		flexDirection: "column"
	},
	choiceTimeTitle: {
		color: "#444444",
		backgroundColor: "#fff",
		textAlign: "center",
		paddingTop: 12,
		paddingBottom: 12,
		fontSize: 18,
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	choiceDate: {
		backgroundColor: "#fff"
	},
	choiceDateItem: {
		// padding:10,
		borderRightWidth: 1,
		borderRightColor: "#dddddd",
		backgroundColor: "red"
	},
	choiceDateItemActive: {
		// padding:10,
		borderRightWidth: 1,
		borderRightColor: "#dddddd",
		backgroundColor: "green"
	},
	choiceDateItemDayBox: {
		flexDirection: "column",
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	choiceDateItemDay: {
		textAlign: "center",
		paddingTop: 6,
		paddingRight: 15,
		paddingBottom: 6,
		paddingLeft: 15
	},
	choiceDateItemListAM: {
		padding: 7,
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	choiceDateItemListPM: {
		padding: 7
	},
	choiceAM: {
		marginTop: 15
	},
	choicePM: {
		marginTop: 15
	},
	choiceTimeBox: {
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#fff"
	},
	choiceTimeList: {
		flexBasis: "25%",
		height: 50
	},
	Time: {
		padding: 20,
		textAlign: "center"
	},
	ticket: {
		paddingBottom: 20,
		textAlign: "center"
	},

	//底部提交
	tabsCon: {
		flexDirection: "row",
		height: "auto"
		// backgroundColor: 'green'
	},
	tabsConLeft: {
		flex: 7,
		flexDirection: "row",
		alignItems: "center"
	},
	tabsConLeftInfo: {
		flex: 8,
		paddingLeft: 10
	},
	tabsConLeftMoney: {
		flex: 2,
		flexDirection: "column",
		// backgroundColor:'yellow',
		paddingRight: 10
	},
	tabsConLeftMoneyOriginal: {
		textAlign: "right",
		fontSize: 18,
		// textDecoration:'line-through',
		color: "#888888"
	},
	tabsConLeftMoneyNow: {
		textAlign: "right",
		fontSize: 18,
		color: "red"
	},
	tabsConRight: {
		flex: 3,
		backgroundColor: "#387ef5",
		justifyContent: "center",
		alignItems: "center"
	},
	subChoice: {
		textAlign: "center",
		fontSize: 16,
		color: "#fff",
		paddingRight: 20,
		paddingLeft: 20
	}
});
