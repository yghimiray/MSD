package separate_class;

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

		ButtonHandler handler = new ButtonHandler(this);

		btnAdd = new JButton("ADD");
		btnAdd.addActionListener(handler);
		contentPane.add(btnAdd);

		btnSub = new JButton("SUBTRACT");
		btnSub.addActionListener(handler);
		contentPane.add(btnSub);

		lblResult = new JLabel("Result");
		contentPane.add(lblResult);

	}

	public JLabel getLblResult() {
		return lblResult;
	}

	public JTextField getTxtOp1() {
		return txtOp1;
	}

	public JTextField getTxtOp2() {
		return txtOp2;
	}

}
