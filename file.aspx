<%@ Page language="vb" runat="server" explicit="true" strict="true" %>
    <script language="vb" runat="server">
        Sub Page_Load(Sender As Object, E As EventArgs)
        Dim strRequest As String = Request.QueryString("file") '-- if something was passed to the file querystring
        If strRequest <> "" Then 'get absolute path of the file


        If Right(strRequest, 5) = ".docx" Then '... proceed with download


        Dim path As String = Server.MapPath("/files/" + strRequest) 'get file object as FileInfo
        Dim file As System.IO.FileInfo = New System.IO.FileInfo(path) '-- if the file exists on the server

        If file.Exists Then 'set appropriate headers
        Response.Clear()
        Response.AddHeader("Content-Disposition", "attachment; filename=" & file.Name)
        Response.AddHeader("Content-Length", file.Length.ToString())
        Response.ContentType = "application/octet-stream"
        Response.WriteFile(file.FullName)
        Response.End 'if file does not exist
        Else
        Response.Write("This file does not exist.")
        End If

        Else
        Response.Clear()
        Response.Write("File extension not supported.")
        Response.End
        End If

        Else
        Response.Write("Please provide a file to download.")
        End If
        End Sub
    </script>
