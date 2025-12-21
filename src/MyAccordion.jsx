import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';

// All copied from: https://mui.com/material-ui/react-accordion/
export function MyAccordion() {
      const [clickCount, setClickCount] = useState(0);
    const [feedback, setFeedback] = useState('');
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">📊 App Statistics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>Button Clicks:</strong> {clickCount}
                        <br />
                        <Button 
                            onClick={() => setClickCount(clickCount + 1)}
                            variant="contained" 
                            size="small"
                            style={{ marginTop: '10px' }}
                        >
                            Click Me! ({clickCount})
                        </Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">💡 Quick Feedback</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <input 
                            type="text"
                            placeholder="How's the app working for you?"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        />
                        {feedback && (
                            <Typography color="primary">
                                Thanks for the feedback: "{feedback}"
                            </Typography>
                        )}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">🚀 App Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                        Quick actions for your todo app. Choose what you want to do:
                    </Typography>
                </AccordionDetails>
                <AccordionActions>
                  <Button onClick={() => alert('Analytics coming soon!')}>View Analytics</Button>
                    <Button onClick={() => alert('Export feature coming soon!')}>Export Data</Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}
