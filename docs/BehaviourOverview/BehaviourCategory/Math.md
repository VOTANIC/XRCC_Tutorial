---
sidebar_position: 18
sidebar_label: Math
---

# Math

<table>
  <thead>
    <tr>
      <th><center>Block Name</center></th>
      <th><center>Block</center></th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center>Vector3</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Vector3.png)</center></td>
      <td>
        Construct a Vector3 variable with the specified values.
        <ul>
          <li><strong>x</strong>: [**Number**](../NodeType#number) value for the 'x' value of the Vector3.</li>
          <li><strong>y</strong>: [**Number**](../NodeType#number) value for the 'y' value of the Vector3.</li>
          <li><strong>z</strong>: [**Number**](../NodeType#number) value for the 'z' value of the Vector3.</li>
          <li><strong>Output</strong>: The constructed [**Vector3**](../NodeType#vector3) variable or the separate x/y/z values</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Color</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Color.png)</center></td>
      <td>
        Construct a Color variable with the specified values in RGBA color standard.
        <ul>
          <li><strong>R</strong>: Number value for the [**Red**](../NodeType#color) value of the Color.</li>
          <li><strong>G</strong>: Number value for the [**Green**](../NodeType#color) value of the Color.</li>
          <li><strong>B</strong>: Number value for the [**Blue**](../NodeType#color) value of the Color.</li>
          <li><strong>A</strong>: Number value for the [**Alpha**](../NodeType#color) value (transparency) of the Color</li>
          <li><strong>Output</strong>: The constructed [**Color**](../NodeType#color) variable.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>OR</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_OR.png)</center></td>
      <td>
        Perform logical operation "OR". Return true if any of the input Boolean value is true, and false only if both input Boolean value is false.
        <ul>
          <li><strong>A</strong>: First [**Boolean**](../NodeType#boolean) value for the logical operation.</li>
          <li><strong>B</strong>: Second [**Boolean**](../NodeType#boolean) value for the logical operation.</li>
          <li><strong>Output</strong>: [**Boolean**](../NodeType#boolean) value of the logical result.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>AND</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_AND.png)</center></td>
      <td>
        Perform logical operation "AND". Return true if both the input Boolean values are true, return false otherwise.
        <ul>
          <li><strong>A</strong>: First [**Boolean**](../NodeType#boolean) value for the logical operation.</li>
          <li><strong>B</strong>: Second [**Boolean**](../NodeType#boolean) value for the logical operation.</li>
          <li><strong>Output</strong>: [**Boolean**](../NodeType#boolean) value of the logical result.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>NOT</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_NOT.png)</center></td>
      <td>
        Perform logical operation "NOT". Return the reverse of the input Boolean value.
        <ul>
          <li><strong>A</strong>: [**Boolean**](../NodeType#boolean) value for the logical operation.</li>
          <li><strong>Output</strong>: [**Boolean**](../NodeType#boolean) value of the logical result.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Add</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Add.png)</center></td>
      <td>
        Perform the arithmetic operation "Addition".
        <ul>
          <li><strong>A</strong>: [**Number**](../NodeType#number) value to be augend.</li>
          <li><strong>B</strong>: [**Number**](../NodeType#number) value to be augend.</li>
          <li><strong>Output</strong>: The **sum** of two number values.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Subtract</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Subtract.png)</center></td>
      <td>
        Perform the arithmetic operation "Subtraction".
        <ul>
          <li><strong>A</strong>: [**Number**](../NodeType#number) value to be augend.</li>
          <li><strong>B</strong>: [**Number**](../NodeType#number) value to be augend.</li>
          <li><strong>Output</strong>: The **difference** of two number values.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Multiply</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Multiply.png)</center></td>
      <td>
        Perform the arithmetic operation "Multiplication".
        <ul>
          <li><strong>A</strong>: [**Number**](../NodeType#number) value to be multiplier</li>
          <li><strong>B</strong>: [**Number**](../NodeType#number) value to be multiplicand.</li>
          <li><strong>Output</strong>: The **product** of two number values.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Divide</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Divide.png)</center></td>
      <td>
        Perform the arithmetic operation "Division".
        <ul>
          <li><strong>A</strong>: [**Number**](../NodeType#number) value to be augend.</li>
          <li><strong>B</strong>: [**Number**](../NodeType#number) value to be augend.</li>
          <li><strong>Output</strong>: The **quotient** of two number values.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Random Number</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_RandomNumber.png)</center></td>
      <td>
        Get a random number value between a range.
        <ul>
          <li><strong>Min</strong>: **Lower Bound** (Inclusive) of the random number value.</li>
          <li><strong>Max</strong>: **Upper Bound** (Exclusive) of the random number value.</li>
          <li><strong>Result</strong>: **Random Integer** value between the Min and Max values.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><center>Compare</center></td>
      <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Math_Compare.png)</center></td>
      <td>
        Compare the values of two numbers on a chosen math operation and return the result as a Boolean value.
        <ul>
          <li><strong>A</strong>: [**Number**](../NodeType#number) value to be comparison.</li>
          <li><strong>B</strong>: [**Number**](../NodeType#number) value to be comparator.</li>
          <li><strong>Operator</strong>: Type of operations to compare two values, including "`>`" greater than, "`<`" less than, "`==`" equal to, "`>=`" greater than or equal to, "`<=`" less than or equal to, and "`!=`" not equal to.</li>
          <li><strong>Result</strong>: [**Boolean**](../NodeType#boolean) value of the comparison result.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>