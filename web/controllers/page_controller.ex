defmodule NoaNoa.PageController do
  use NoaNoa.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
