package com.example.approach2;

public class Undergrad extends Student {
	private char type;

	public Undergrad(String name) {
		this(name, 'U');
	}

	public Undergrad(String name, char type) {
		super(name);
		this.type = type;
	}

	@Override
	public String computeGrade() {
		switch (type) {
		case 'S':
			return "Computimg for a Senior";

		case 'J':
			return "Computimg for a Junior";

		default:
			return "Computing common UnderGrad logic";

		}
	}
}
