import React from "react";
import axios from 'axios';

import { WorkSection,WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from "./style";


class Work extends React.Component { 

    render() {
        return (
            <WorkSection>
                <div className="container">
       
                    <WorkTitle>
                        <Span>Mon</Span> Travail
        </WorkTitle>
       
                    <WorkPart first="1">
                        <Icon className="icon fa fa-chain fa-2x"></Icon>
                        <PartTitle>Mobile Ux</PartTitle>
                        <Line />
                        <PartDesc>
                            lefjdglkfdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdkfgerkgnroirgrtoj
          </PartDesc>
                    </WorkPart>

                    <WorkPart>
                        <Icon className="icon fa fa-chain fa-2x"></Icon>
                        <PartTitle>Mobile Ux</PartTitle>
                        <Line />
                        <PartDesc>
                            lefjdglkfdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdkfgerkgnroirgrtoj
          </PartDesc>
                    </WorkPart>

                    <WorkPart>
                        <Icon className="icon fa fa-chain fa-2x"></Icon>
                        <PartTitle>Mobile Ux</PartTitle>
                        <Line />
                        <PartDesc>
                            lefjdglkfdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdkfgerkgnroirgrtoj
          </PartDesc>
                    </WorkPart>
                </div>
            </WorkSection>
        );
    }
};

export default Work;
