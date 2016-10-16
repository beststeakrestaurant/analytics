defmodule Analytics.PageControllerTest do
  use Analytics.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "<div id=\"react-container\"></div>"
  end
end
