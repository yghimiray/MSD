package separate_class;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;

public class ButtonHandler implements ActionListener {
	CalculatorWindow window;
	
	public ButtonHandler(CalculatorWindow window) {
		this.window = window;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
	

		JButton clickedBtn = (JButton) e.getSource();
		double op1 = Double.parseDouble(window.getTxtOp1().getText());
		double op2 = Double.parseDouble(window.getTxtOp2().getText());
		if (clickedBtn.getText() == "ADD") {
			window.getLblResult().setText(op1 + op2 + "");
		} else {
			window.getLblResult().setText(op1 - op2 + "");
		}
	}

}
