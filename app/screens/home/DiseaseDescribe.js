//这是病情描述页面
import React, { Component } from "react";

import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
	TouchableNativeFeedback,
	Modal,
	ListView
} from "react-native";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";

const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 4;
const options = [
	"取消",
	"Apple",
	"Banana",
	"Watermelon",
	<Text
		style={{ color: "red", fontSize: 18 }}
		onPress={() => {
			alert(123);
		}}
	>
		新增
	</Text>
];

var ImagePicker = require("react-native-image-picker");

//图片选择器参数设置
var camaraOptions = {
	title: "请选择图片来源",
	cancelButtonTitle: "取消",
	takePhotoButtonTitle: "拍照",
	chooseFromLibraryButtonTitle: "从相册选择",
	storageOptions: {
		skipBackup: true,
		path: "images"
	}
};

export default class DiseaseDescribe extends Component {
	static navigationOptions = {
		title: "病情描述",
		tabBarVisible: false
	};

	constructor(props) {
		super(props);
		this.state = {
			selected: "",
			avatarSource: null
		};
		this.handlePress = this.handlePress.bind(this);
		this.showActionSheet = this.showActionSheet.bind(this);
	}

	showActionSheet() {
		this.ActionSheet.show();
	}

	handlePress(i) {
		this.setState({
			selected: i
		});
	}

	_toPayment() {
		const navigation = this.props.navigation;
		navigation.navigate("Payment", {});
	}
	_choosePatient() {
		alert(123);
	}

	//选择照片按钮点击
	choosePic() {
		ImagePicker.showImagePicker(camaraOptions, response => {
			console.log("Response = ", response);

			if (response.didCancel) {
				console.log("用户取消了选择！");
			} else if (response.error) {
				alert("ImagePicker发生错误：" + response.error);
			} else {
				let source = { uri: response.uri };
				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };
				this.setState({
					avatarSource: source
				});
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					{/*顶部进度状态条开始*/}
					<View style={styles.topSchedule}>
						<View style={styles.topImgBoxO}>
							<Image
								style={styles.topImg}
								source={require("../../img/right.png")}
							/>
							<Text style={styles.txt}>病情描述</Text>
						</View>
						<View style={styles.topImgBox}>
							<Image
								style={styles.topImgLine}
								source={require("../../img/line.png")}
							/>
						</View>
						<View style={styles.topImgBoxO}>
							<Image
								style={styles.topImg}
								source={require("../../img/circle.png")}
							/>
							<Text style={styles.txt}>支付</Text>
						</View>
						<View style={styles.topImgBox}>
							<Image
								style={styles.topImgLine}
								source={require("../../img/line.png")}
							/>
						</View>
						<View style={styles.topImgBoxO}>
							<Image
								style={styles.topImg}
								source={require("../../img/circle.png")}
							/>
							<Text style={styles.txt}>平台确认</Text>
						</View>
						<View style={styles.topImgBox}>
							<Image
								style={styles.topImgLine}
								source={require("../../img/line.png")}
							/>
						</View>
						<View style={styles.topImgBoxO}>
							<Image
								style={styles.topImg}
								source={require("../../img/circle.png")}
							/>
							<Text style={styles.txt}>医院就诊</Text>
						</View>
					</View>

					{/*病情描述详细信息*/}
					<View style={styles.InfoBox}>
						<View style={styles.InfoBoxIn}>
							<Text style={styles.DoctorInfo}>孙医生（工号007）</Text>
							<Text style={styles.illDescribeTitle}>病情描述</Text>
							<TextInput placeholder="请描述你的病情" style={styles.illDescribe} />
							<Text style={styles.illDescribeTitle}>病情图片</Text>
							<TouchableNativeFeedback
								onPress={() => {
									this.choosePic();
								}}
							>
								<View>
									<Text style={styles.uploadImg}>上传图片</Text>
									<Image
										style={styles.choiceImgBG}
										source={require("../../img/icon_common_rightarrow.png")}
									/>
								</View>
							</TouchableNativeFeedback>
							{/*待上传的照片的缩略图*/}
							<View>
								<Image source={this.state.avatarSource} style={styles.image} />
							</View>
							<View style={styles.thumbnailImgBox}>
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}
								>
									<Image
										source={this.state.avatarSource}
										style={styles.thumbnailImg}
									/>
								</ScrollView>
							</View>

							{/*选择就诊人*/}
							<Text style={styles.illDescribeTitle}>就诊人</Text>
							<TouchableNativeFeedback
								onPress={() => {
									this.showActionSheet();
								}}
							>
								<View>
									<Text style={styles.choicePatient}>选择就诊人</Text>
									<Image
										style={styles.choiceImgBG}
										source={require("../../img/icon_common_rightarrow.png")}
									/>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>

					{/*提交预约单*/}
					<View style={styles.subBtnBox}>
						<TouchableNativeFeedback
							onPress={() => {
								this._toPayment();
							}}
						>
							<Text style={styles.subBtn}>提交预约单</Text>
						</TouchableNativeFeedback>
					</View>

					{/*温馨提示*/}
					<View style={styles.warmPromptBox}>
						<View style={styles.warmPromptBoxIn}>
							<Text style={styles.warmPrompt}>温馨提示：</Text>
							<Text style={styles.warmPrompt}>地方开始地方深刻搭街坊深刻反思的</Text>
						</View>
					</View>
				</ScrollView>
				<ActionSheet
					ref={o => (this.ActionSheet = o)}
					options={options}
					cancelButtonIndex={CANCEL_INDEX}
					destructiveButtonIndex={DESTRUCTIVE_INDEX}
					onPress={this.handlePress}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0"
	},
	topSchedule: {
		backgroundColor: "#fff",
		height: 70,
		flexDirection: "row",
		marginTop: 1,
		marginBottom: 1,
		padding: 10
	},
	topImgBox: {
		flex: 1,
		marginRight: 1
	},
	topImgBoxO: {
		flex: 2,
		paddingTop: 5
	},
	topImg: {
		alignSelf: "center",
		width: 20,
		height: 20
	},
	topImgLine: {
		width: 30,
		alignSelf: "center"
	},
	txt: {
		marginTop: 7,
		alignSelf: "center"
	},
	//    详细信息开始
	InfoBox: {
		backgroundColor: "#fff",
		height: "auto",
		padding: 20,
		borderBottomWidth: 2,
		borderBottomColor: "#dddddd"
	},
	InfoBoxIn: {
		borderWidth: 1,
		borderColor: "#dddddd"
	},
	DoctorInfo: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	illDescribeTitle: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		color: "#000",
		fontSize: 14,
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	illDescribe: {
		// backgroundColor:'red',
		height: 100
	},
	uploadImg: {
		// flex:1,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	thumbnailImgBox: {
		flexDirection: "row"
	},
	choicePatient: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#dddddd"
	},
	choiceImgBG: {
		position: "absolute",
		right: 10,
		top: 20,
		width: 20,
		height: 20
	},
	subBtnBox: {
		paddingRight: 20,
		paddingLeft: 20,
		borderBottomColor: "#dddddd",
		borderBottomWidth: 1,
		backgroundColor: "#fff"
	},
	subBtn: {
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "#09a9ef",
		textAlign: "center",
		marginTop: 10,
		width: "100%",
		marginBottom: 10,
		color: "#fff"
	},
	warmPromptBox: {
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomColor: "#dddddd",
		borderBottomWidth: 1,
		backgroundColor: "#fff"
	},
	warmPromptBoxIn: {
		borderWidth: 1,
		borderColor: "#ddd",
		padding: 10
	},
	warmPrompt: {}
});
