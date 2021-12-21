package nested_class;

import java.awt.Container;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class CalculatorWindow extends JFrame {

	private JLabel lblOp1;
	private JLabel lblOp2;
	private JLabel lblResult;

	private JTextField txtOp1;
	private JTextField txtOp2;

	private JButton btnAdd;
	private JButton btnSub;

	public CalculatorWindow() {
		setSize(300, 500);
		setTitle("Simple calculator");

		Container contentPane = this.getContentPane();
		contentPane.setLayout(new FlowLayout());

		lblOp1 = new JLabel("First Operand: ");
		contentPane.add(lblOp1);

		txtOp1 = new JTextField(20);
		contentPane.add(txtOp1);

		lblOp2 = new JLabel("Second Operand: ");
		contentPane.add(lblOp2);

		txtOp2 = new JTextField(20);
		contentPane.add(txtOp2);

		ButtonHandler handler = new ButtonHandler();

		btnAdd = new JButton("ADD");
		btnAdd.addActionListener(handler);
		contentPane.add(btnAdd);

		btnSub = new JButton("SUBTRACT");
		btnSub.addActionListener(handler);
		contentPane.add(btnSub);

		lblResult = new JLabel("Result");
		contentPane.add(lblResult);

	}

	private class ButtonHandler implements ActionListener {

		@Override
		public void actionPerformed(ActionEvent e) {
			JButton clickedBtn = (JButton) e.getSource();
			double op1 = Double.parseDouble(txtOp1.getText());
			double op2 = Double.parseDouble(txtOp2.getText());
			if (clickedBtn.getText() == "ADD") {
				lblResult.setText(op1 + op2 + "");
			} else {
				lblResult.setText(op1 - op2 + "");
			}

		}

	}
}
