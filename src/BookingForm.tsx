import { Form, Input, Button, Select, DatePicker, TimePicker } from "antd";
import moment from "moment";

const { Option } = Select;

interface FormValues {
  tower: string;
  floor: string;
  room: string;
  date: moment.Moment;
  time: moment.Moment;
  comment: string;
}

const BookingForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log(JSON.stringify(values));
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      layout="basic"
      form={form}
      onFinish={onFinish}
      onReset={onReset}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin: "0 auto", marginTop: "100px" }}
    >
      <Form.Item
        label="Башня"
        name="tower"
        rules={[{ required: true, message: "Выберите башню" }]}
      >
        <Select placeholder="Выберите башню">
          <Option value="A">Башня А</Option>
          <Option value="B">Башня Б</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Этаж"
        name="floor"
        rules={[{ required: true, message: "Выберите этаж" }]}
      >
        <Select placeholder="Выберите этаж">
          {Array.from({ length: 25 }, (_, i) => i + 3).map((floor) => (
            <Option key={floor} value={floor.toString()}>
              {floor}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Переговорка"
        name="room"
        rules={[{ required: true, message: "Выберите переговорку" }]}
      >
        <Select placeholder="Выберите переговорку">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((room) => (
            <Option key={room} value={room.toString()}>
              {room}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Дата"
        name="date"
        rules={[{ required: true, message: "Выберите дату" }]}
      >
        <DatePicker format="DD.MM.YYYY" />
      </Form.Item>

      <Form.Item
        label="Время"
        name="time"
        rules={[{ required: true, message: "Выберите время" }]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item label="Комментарий" name="comment">
        <Input.TextArea placeholder="Введите комментарий" rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: "8px" }}>
          Отправить
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          style={{ marginRight: "8px" }}
        >
          Очистить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookingForm;
