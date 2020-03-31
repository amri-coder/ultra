import React from "react";
import axios from 'axios';

import { WorkSection,WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from "./style";


class Work extends React.Component { 

    state = {
        works: []
    }
    componentDidMount() {
        axios.get('js/data.json').then (res => {this.setState({works:res.data.works})})
    }
        
    
    render() {

        const { works } = this.state;
        const worksList = works.map((workItem) => {
            return (
                    <WorkPart key={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <Line />
                        <PartDesc>
                        {workItem.body}
                        </PartDesc>
                    </WorkPart>

            );
        }
        );

        return (
            <WorkSection>
                <div className="container">
       
                    <WorkTitle>
                        <Span>Mon</Span> Travail
                    </WorkTitle>
       
                  {worksList}
                </div>
            </WorkSection>
        );
    }
};

export default Work;
