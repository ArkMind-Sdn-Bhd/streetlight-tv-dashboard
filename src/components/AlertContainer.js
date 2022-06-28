import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

export default function AlertContainer() {

	const [alertList, setAlertList] = useState([]);
	const [blackoutList, setBlackoutList] = useState([]);
	const [phaseoutList, setPhaseoutList] = useState([]);
	const [doorOpenList, setDoorOpenList] = useState([]);
	const [dayLightOnList, setDayLightOnList] = useState([]);

	const onGetAlertList = () => {
		axios.get(`${process.env.REACT_APP_BASE_URL}/getLatestAlertGroupByAlertCode`)
			.then((res) => {
				setAlertList(res.data.alerts);
				alertList.map((alert, index) => {
					if (alert.type === "BACKOUT") {
						setBlackoutList(alert.alerts)
						console.log(blackoutList)
					}
					if (alert.type === "PHASEOUT") {
						setPhaseoutList(alert.alerts)
						console.log(phaseoutList)
					}
					if (alert.type === "DOOROPEN") {
						setDoorOpenList(alert.alerts)
						console.log(doorOpenList)
					}
					if (alert.type === "DAYLIGHTON") {
						setDayLightOnList(alert.alerts)
						console.log(dayLightOnList)
					}
				})
			})
			.catch((error) => {
				console.log(error);
			})
	}

	useEffect(() => {
		setInterval(() => {
			onGetAlertList()
		}, 5000)
	}, []);


	return (
		<div className="alertContainer">
			{/*<h5 className="alert">Alert</h5>*/}

			<br/>
			<br/>
			<br/>

			{/*
       *Black Out
       */}

			<div className="inner-wrapper">
				<h6 className="h6 balckout">Blackout</h6>
				<table className="table">
					<tr className="data back-blackout">
						<th>Cabinet</th>
						<th className="center-heading">Region</th>
						<th>Time</th>
					</tr>
					{
						blackoutList.map((details) => {
							return (
								<tr className="data">
									<td>{ details.subsection_name }</td>
									<td className="centered">{ details.road_name }</td>
									<td>{ details.subsection_name }</td>
								</tr>
							)
						})
					}
					{/*<tr className="data back-blackout">*/}
					{/*	<td>Jalan Ungu U9/28B</td>*/}
					{/*	<td className="centered">U9</td>*/}
					{/*	<td>20/06/25 21:17:57</td>*/}
					{/*</tr>*/}
				</table>
			</div>

			{/*
       *Phase Out
       */}
			<div className="inner-wrapper">
				<h6 className="h6 phaseout">Phaseout</h6>

				<table className="table">
					<tr className="data back-blackout">
						<th>Cabinet</th>
						<th className="center-heading">Region</th>
						<th>Time</th>
					</tr>
					{
						phaseoutList.map((details) => {
							return (
								<tr className="data">
									<td>{ details.subsection_name }</td>
									<td className="centered">{ details.road_name }</td>
									<td>{ details.subsection_name }</td>
								</tr>
							)
						})
					}
					{/*<tr className="data">*/}
					{/*    <td>Jalan Tengku Ampuan 9</td>*/}
					{/*    <td className="centered">7</td>*/}
					{/*    <td>22/06/21 10:14:20</td>*/}
					{/*</tr>*/}
					{/*<tr className="data">*/}
					{/*    <td>Lebuh Keluli</td>*/}
					{/*    <td className="centered">7</td>*/}
					{/*    <td>20/06/25 19:10:01</td>*/}
					{/*</tr>*/}
					{/*<tr className="data back-blackout">*/}
					{/*    <td>Jalan Ungu U9/28B</td>*/}
					{/*    <td className="centered">U9</td>*/}
					{/*    <td>20/06/25 21:17:57</td>*/}
					{/*</tr>*/}
				</table>
			</div>

			{/*
       *Major Fault
       */}
			<div className="inner-wrapper">
				<h6 className="h6 majorFault">Major Fault</h6>

				<table className="table">
					<tr className="data back-blackout">
						<th>Cabinet</th>
						<th className="center-heading">Region</th>
						<th>Time</th>
					</tr>
					{
						alertList.map((alert, index) => {
							if (alert.type === "MAJORFAULT") {
								alert.alerts.map((details) => {
									return (
										<tr className="data">
											<td>{ details.subsection_name }</td>
											<td className="centered">{ details.road_name }</td>
											<td>{ details.subsection_name }</td>
										</tr>
									)
								})
							}
						})
					}
					{/*<tr className="data">*/}
					{/*    <td>Lebuh Keluli</td>*/}
					{/*    <td className="centered">7</td>*/}
					{/*    <td>20/06/25 19:10:01</td>*/}
					{/*</tr>*/}
					{/*<tr className="data back-blackout">*/}
					{/*    <td>Jalan Ungu U9/28B</td>*/}
					{/*    <td className="centered">U9</td>*/}
					{/*    <td>20/06/25 21:17:57</td>*/}
					{/*</tr>*/}
				</table>
			</div>

			{/*
       *Minor Fault
       */}
			<div className="inner-wrapper">
				<h6 className="h6 minorFault">Minor Fault</h6>

				<table className="table">
					<tr className="data back-blackout">
						<th>Cabinet</th>
						<th className="center-heading">Region</th>
						<th>Time</th>
					</tr>
					{
						alertList.map((alert, index) => {
							if (alert.type === "MINORFAULT") {
								alert.alerts.map((details) => {
									return (
										<tr className="data">
											<td>{ details.subsection_name }</td>
											<td className="centered">{ details.road_name }</td>
											<td>{ details.subsection_name }</td>
										</tr>
									)
								})
							}
						})
					}
					{/*<tr className="data">*/}
					{/*    <td>Lebuh Keluli</td>*/}
					{/*    <td className="centered">7</td>*/}
					{/*    <td>20/06/25 19:10:01</td>*/}
					{/*</tr>*/}
					{/*<tr className="data back-blackout">*/}
					{/*    <td>Jalan Ungu U9/28B</td>*/}
					{/*    <td className="centered">U9</td>*/}
					{/*    <td>20/06/25 21:17:57</td>*/}
					{/*</tr>*/}
				</table>
			</div>

			{/*
       *Door Open
       */}
			<div className="inner-wrapper">
				<h6 className="h6 doorOpen">Door Open</h6>
				<table className="table">
					<tr className="data back-blackout">
						<th>Cabinet</th>
						<th className="center-heading">Region</th>
						<th>Time</th>
					</tr>
					{
						alertList.map((alert, index) => {
							if (alert.type === "DOOROPEN") {
								alert.alerts.map((details) => {
									return (
										<tr className="data">
											<td>{ details.subsection_name }</td>
											<td className="centered">{ details.road_name }</td>
											<td>{ details.subsection_name }</td>
										</tr>
									)
								})
							}
						})
					}
					{/*<tr className="data">*/}
					{/*    <td>Jalan Tengku Ampuan 9</td>*/}
					{/*    <td className="centered">7</td>*/}
					{/*    <td>22/06/21 10:09:05</td>*/}
					{/*</tr>*/}
					{/*<tr className="data back-blackout">*/}
					{/*    <td>Jalan Ungu U9/28B</td>*/}
					{/*    <td className="centered">U9</td>*/}
					{/*    <td>20/06/25 21:17:57</td>*/}
					{/*</tr>*/}
				</table>
			</div>

			{/*
       *Door Open
       */}
			<div className="inner-wrapper">
				<h6 className="h6 daylightOn">Day Light On</h6>

				<table className="table">
					<tr className="data back-blackout">
						<th>Cabinet</th>
						<th className="center-heading">Region</th>
						<th>Time</th>
					</tr>
					{
						alertList.map((alert, index) => {
							if (alert.type === "DAYLIGHTON") {
								alert.alerts.map((details) => {
									return (
										<tr className="data">
											<td>{ details.subsection_name }</td>
											<td className="centered">{ details.road_name }</td>
											<td>{ details.subsection_name }</td>
										</tr>
									)
								})
							}
						})
					}
					{/*<tr className="data">*/}
					{/*    <td>Lebuh Keluli</td>*/}
					{/*    <td className="centered">7</td>*/}
					{/*    <td>20/06/25 19:10:01</td>*/}
					{/*</tr>*/}
					{/*<tr className="data back-blackout">*/}
					{/*    <td>Jalan Ungu U9/28B</td>*/}
					{/*    <td className="centered">U9</td>*/}
					{/*    <td>20/06/25 21:17:57</td>*/}
					{/*</tr>*/}
				</table>
			</div>
		</div>
	);
}
