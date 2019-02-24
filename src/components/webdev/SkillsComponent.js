import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

class SkillsComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: [
				{ name: 'HTML5/CSS3', percent: 90 },
				{ name: 'JavaScript', percent: 80 },
				{ name: 'React.js/Redux', percent: 70 },
				{ name: 'Git', percent: 80 },
				{ name: 'WordPress', percent: 65 },
				{ name: 'Photoshop', percent: 75 },
				{ name: 'Lightroom', percent: 85 },
				{ name: 'Super Smash Bros.', percent: 75 },
			],
		};
		autoBind(this);
	}

	componentWillReceiveProps = nextProps => {
		if (nextProps.entered !== this.props.entered) {
			this.state.skills.map((_, i) => {
				this[`countUp ${i}`].click();
			});
		}
	};

	render() {
		let { entered } = this.props;
		let { skills } = this.state;

		return (
			<div>
				<Row>
					<Col md={12} className="skills-chart">
						<ul className="skills">
							{skills.map((skill, i) => (
								<div key={i} className="skillbar clearfix" data-percent={skill.percent}>
									<div className="skillbar-title">
										<span>{skill.name}</span>
									</div>
									<div
										className={`${!entered && 'default'} skillbar-bar`}
										style={{
											width: entered ? `${skill.percent}%` : `0%`,
											transition: 'width 1500ms ease-in',
										}}
									>
										<CountUp key={i} delay={1} end={skill.percent} suffix="%">
											{({ countUpRef, start }) => (
												<div>
													<span className="skill-bar-percent" ref={countUpRef} />
													<button
														style={{ display: 'none' }}
														ref={c => (this[`countUp ${i}`] = c)}
														onClick={start}
													/>
												</div>
											)}
										</CountUp>
									</div>
								</div>
							))}
						</ul>
					</Col>
					<ul className="axis">
						<li className="label">Newbie</li>
						<li className="label">Apprentice</li>
						<li className="label">Padawan</li>
						<li className="label">Jedi</li>
					</ul>
				</Row>
			</div>
		);
	}
}

export default SkillsComponent;
