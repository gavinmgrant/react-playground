import React from "react";

class Accordion extends React.Component {
    static defaultProps = { sections: [], 
    };

    state = { currentIndex: null,
    };

    handleButtonClick(index) {
        this.setState({ currentIndex: index })
    }

    renderSection(section, index, currentIndex) {
        return (
            <li className='Accordion-section' key={index}>
                <button type='button'
                    onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(currentIndex === index) && <p>{section.content}</p>}
            </li>
        ) 
    }

    render() {
        const { currentIndex } = this.state
        const {sections } = this.props
        return (
            <ul>
                {sections.map((section, index) =>
                    this.renderSection(section, index, currentIndex)
                )}
            </ul>
        )
    }
}

export default Accordion;